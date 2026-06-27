const Resume = require("../models/Resume");



const {
    extractTextFromPDF,
} = require("./pdfService");

const {
    buildResumePrompt,
} = require("./promptService");

const {
    analyzeResume,
} = require("./geminiService");

const parseGeminiResponse = require("../utils/parseGeminiResponse");

const validateAnalysis =
require("../utils/validateAnalysis");

const analyzeResumeService = async (
    userId,
    file,
    jobDescription
) => {

    console.log("Extracting Resume...");
    const resumeText =
        await extractTextFromPDF(file.buffer);

    if (!resumeText) {
        throw new Error("Unable to extract text from resume.");
    }

    console.log("Building Prompt...");
    const prompt =
        buildResumePrompt(
            resumeText,
            jobDescription
        );
    
    console.log("Calling Gemini...");
    const aiResponse =
        await analyzeResume(prompt);

        const validateAnalysis =
        require("../utils/validateAnalysis");

        console.log("Parsing Response...");
        const analysis =
        validateAnalysis(
            parseGeminiResponse(aiResponse)
        );


        console.log("Saving Resume...");
    const savedResume =
        await Resume.create({

            user: userId,

            originalFileName:
                file.originalname,

            resumeText,

            jobDescription,

            analysis,

        });

    return savedResume;

};

module.exports = {
    analyzeResumeService,
};