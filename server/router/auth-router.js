const express = require("express");
const router = express.Router();


router.route("/").get((req, res) => {
    res.status(200).send("Router Route");
  });


router.route("/register").get((req,res)=>{
    res.status(200).send("Register Route")
})

module.exports = router;
