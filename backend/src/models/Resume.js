const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
    {
        // Owner of the resume
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        // Original uploaded PDF name
        originalFileName: {
            type: String,
            required: true,
            trim: true,
        },

        // Extracted text from PDF
        resumeText: {
            type: String,
            required: true,
        },

        // Optional Job Description
        jobDescription: {
            type: String,
            default: "",
        },

        // AI Analysis
        analysis: {
            atsScore: {
                type: Number,
                default: 0,
            },

            jobMatchScore: {
                type: Number,
                default: 0,
            },

            summary: {
                type: String,
                default: "",
            },

            strengths: {
                type: [String],
                default: [],
            },

            weaknesses: {
                type: [String],
                default: [],
            },

            missingSkills: {
                type: [String],
                default: [],
            },

            missingKeywords: {
                type: [String],
                default: [],
            },

            improvements: {
                type: [String],
                default: [],
            },

            suggestedProjects: {
                type: [String],
                default: [],
            },

            interviewQuestions: {
                type: [String],
                default: [],
            },

            recruiterFeedback: {
                type: String,
                default: "",
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Resume", resumeSchema);