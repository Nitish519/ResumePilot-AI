const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {

    const allowedTypes = ["application/pdf"];

    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error("Only PDF files are allowed"), false);
    }

    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

module.exports = upload;