require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const app=express()
const PORT=process.env.PORT||1234
const connectDB=require("./config/connectDB")
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
connectDB()

app.use("/api/family", require("./routes/FamilyRoute"))
app.use("/api/employee", require("./routes/EmployeeRoute"))

app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})