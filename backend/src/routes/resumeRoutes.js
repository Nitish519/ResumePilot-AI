const express = require("express");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {

    analyzeResume,

    getResumeHistory,

    getResumeById,

    deleteResume,

} = require("../controllers/resumeController");

const router = express.Router();

console.log("protect:", typeof protect);
console.log("upload:", typeof upload);
console.log("analyzeResume:", typeof analyzeResume);

router.post(
    "/analyze",
    protect,
    upload.single("resume"),
    analyzeResume
);

router.get(

    "/history",

    protect,

    getResumeHistory

);

router.get(

    "/:id",

    protect,

    getResumeById

);

router.delete(

    "/:id",

    protect,

    deleteResume

);

module.exports = router;