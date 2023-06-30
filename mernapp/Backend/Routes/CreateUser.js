const express = require("express");
const router = express.Router();
// const user = require("../Models/User");
const User = require("../Models/User");


router.post("/createuser", async (req, res)=>{
    try {
        await User.create({
            Name: req.body.Name,
            Password: req.body.Password,
            Email: req.body.Email,
            Location: req.body.Location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

});

module.exports = router;