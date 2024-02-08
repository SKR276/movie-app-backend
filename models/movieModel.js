const mongoose=require("mongoose")
const movieSchema=new mongoose.Schema(
    {
        movieName:String,
        movieDirector:String,
        movieLanguage:String,
        movieRelYear:String
    }
)

module.exports=mongoose.model("movies",movieSchema)