const buildResumePrompt = (
    resumeText,
    jobDescription = ""
) => {

return `
You are a Senior Technical Recruiter and ATS Expert.

Analyze the resume.

${jobDescription ? `Compare it against this Job Description:

${jobDescription}

` : ""}

Return ONLY valid JSON.

Schema:

{
"atsScore": number,
"jobMatchScore": number,
"summary": "",
"strengths": [],
"weaknesses": [],
"missingSkills": [],
"missingKeywords": [],
"improvements": [],
"suggestedProjects": [],
"interviewQuestions": [],
"recruiterFeedback": ""
}

Resume:

${resumeText}
`;

};

module.exports = {
    buildResumePrompt,
};