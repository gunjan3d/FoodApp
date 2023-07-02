const express = require("express");
const router = express.Router();
// const user = require("../Models/User");
const User = require("../Models/User");
const { body, validationResult } = require('express-validator');


router.post("/createuser", body('Email').isEmail(), body('Password').isLength({ min: 5 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        await User.create({
            Name: req.body.Name,
            Password: req.body.Password,
            Email: req.body.Email,
            Location: req.body.Location
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }

});

module.exports = router;