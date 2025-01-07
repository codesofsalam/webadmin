const home = async (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    console.log(error)
  }
};

const register =async(req,res)=>{
try {
    res.status(200).send("Registration Page")
} catch (error) {
    res.status(400).send("Error in Register Page")
}
}
module.exports = { home, register };
