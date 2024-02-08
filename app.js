const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const movieRoute=require("./controller/movieRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sreelakshmi:Skr1234@cluster0.p9kjpl1.mongodb.net/movieDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/movies",movieRoute)

app.listen(3009,()=>{
    console.log("server running")
})