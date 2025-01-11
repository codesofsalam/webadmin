const mongoose=require("mongoose")
const URI=process.env.MONGODB_URI
const connectDb=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Database Connection Successfully");
        
    } catch (error) {
        console.error("Error in Connecting to Database")
        process.exit(0)
    }
}
module.exports=connectDb
