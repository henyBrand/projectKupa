const mongoose = require("mongoose")
const ChildSchema = new mongoose.Schema({
    first_name: {
        type: String,
        requierd: true
    },
    birth_date: {
        type: Date,
        requierd: true
    },
    birth_date: {
        type: Number,
    }
}, {
    timestamps: true
})
module.exports = ChildSchema