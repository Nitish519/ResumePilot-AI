const express = require("express");


const {
    registerUser,
    loginUser,
} = require("../controllers/authController");

const validate = require("../middleware/validate");


const router = express.Router();

const {
    registerValidator,
    loginValidator,
} = require("../validators/authValidator");


// console.log("registerValidator:", registerValidator);
// console.log("validate:", typeof validate);
// console.log("registerUser:", typeof registerUser);
// console.log("loginUser:", typeof loginUser);


router.post(
    "/register",
    registerValidator,
    validate,
    registerUser
);

router.post(
    "/login",
    loginValidator,
    validate,
    loginUser
);

const protect = require("../middleware/authMiddleware");

router.get("/me", protect, (req, res) => {

    res.json({
        success: true,
        user: req.user,
    });

});

module.exports = router;