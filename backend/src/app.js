const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//auth
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");


const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));



app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ResumePilot AI API Running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

app.use(errorMiddleware);

module.exports = app;