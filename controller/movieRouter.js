const express=require("express")
const movieModel=require("../models/movieModel")

const router=express.Router()

router.post("/movie_entry",async(req,res)=>{
    let data=req.body
    let movieObj=new movieModel(data)
    let result=await movieObj.save()
    res.json({
        status:"success"
    })
})

module.exports=router