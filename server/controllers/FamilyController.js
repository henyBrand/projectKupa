const Family = require("../models/Family")
const bcrypt = require("bcrypt")

const getAllFamilies = async (req, res) => {
    const family = await Family.find({}, { password: 0 }).populate("employee").lean()

    if (!family.length) {
        return res.status(400).json({
            error: true,
            message: "no family",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: family
    })
}
const getFamilyById = async (req, res) => {
    const { id } = req.params
    const family = await Family.findById(id, { password: 0 }).lean()
    if (!family) {
        return res.status(400).json({
            error: true,
            message: "no family",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: family
    })
}

const addFamily = async (req, res) => {
    const tzFile = (req.file?.filename ? req.file.filename : "")
    const { employee, name, username, password, address, phone, email, marital_status, bank_details,  parent1,  parent2, child } = req.body
    if (!name || !password || !username || !marital_status || !bank_details) {
        return res.status(400).json({
            error: true,
            message: "name, username, password, marital_status and bank_details are required",
            data: null
        })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const duplicate = await Family.findOne({ username }).lean()
    if (duplicate) {
        return res.status(409).json({
            error: true,
            message: "duplicate username",
            data: null
        })
    }
    const family = await Family.create({ employee, name, username, password: hashPassword, address, phone, email, marital_status, bank_details,  parent1,  parent2, child, tzFile })
    if (!family) {
        return res.status(404).json({
            error: true,
            message: "no family",
            data: null
        })
    }
    res.json({
        error: false,
        message: "The family was successfully added",
        data: {
            name,
            username,
            address
        }
    })
}
const updateFamily = async (req, res) => {
    const tzFile = (req.file?.filename ? req.file.filename : "")
    const { id, employee, name, username, password, address, phone, email, marital_status, bank_details,  parent1,  parent2, child } = req.body
    if (!id) {
        return res.status(404).send("ID is required")
    }
    const family = await Family.findById(id).exec()
    if (!family) {
        return res.status(400).json({
            error: true,
            message: "no family",
            data: null
        })
    }
    console.log("1");

    if (password) {
        // const hashPassword = await bcrypt.hash(password, 10)
        const hashPassword = bcrypt.hashSync(password, 10)

        family.password = hashPassword
    }

    else {
        family.password = password

    }
    console.log("2");

    if (username) {
        const duplicate = await Family.findOne({ username }).lean()
        if (duplicate && duplicate.username !== family.username) {

            return res.status(409).json({
                error: true,
                message: "duplicate username",
                data: null
            })
        }
    }


    family.employee = employee
    family.name = name
    family.username = username
    family.address = address
    family.phone = phone
    family.email = email
    family.marital_status = marital_status
    family.bank_details = bank_details
    family.parent1 =  parent1
    family.parent2 =  parent2
    family.child = child
    if (tzFile)
        family.tzFile = tzFile

    const newFamily = await family.save()

    res.json({
        error: false,
        message: "The family was successfully updeted",
        data: newFamily
    })

}
const deleteFamily = async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(404).send("ID is required")
    }
    const family = await Family.findById(id).exec()
    const deletedFamily = await family.deleteOne()
    res.json({
        error: false,
        message: "The family was successfully deleted",
        data: deletedFamily
    })
}

module.exports = { getAllFamilies, getFamilyById, addFamily, updateFamily, deleteFamily }