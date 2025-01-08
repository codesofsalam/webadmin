const mongoose=require("mongoose")
const URI="mongodb+srv://abdulsalamshah013:W5mA68Yc2Tw8esj7@cluster0.a6jnm.mongodb.net/webadmindb?retryWrites=true&w=majority&appName=Cluster0";
//mongoose.connect(URI)
const connectDb=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection successfully");
        
    } catch (error) {
        console.error("Error in connecting to database")
        process.exit(0)
    }
}
module.exports=connectDb
