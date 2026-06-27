module.exports = function validateAnalysis(data) {

    return {

        atsScore: Number(data.atsScore) || 0,

        jobMatchScore: Number(data.jobMatchScore) || 0,

        summary: data.summary || "",

        strengths: Array.isArray(data.strengths)
            ? data.strengths
            : [],

        weaknesses: Array.isArray(data.weaknesses)
            ? data.weaknesses
            : [],

        missingSkills: Array.isArray(data.missingSkills)
            ? data.missingSkills
            : [],

        missingKeywords: Array.isArray(data.missingKeywords)
            ? data.missingKeywords
            : [],

        improvements: Array.isArray(data.improvements)
            ? data.improvements
            : [],

        suggestedProjects: Array.isArray(data.suggestedProjects)
            ? data.suggestedProjects
            : [],

        interviewQuestions: Array.isArray(data.interviewQuestions)
            ? data.interviewQuestions
            : [],

        recruiterFeedback:
            data.recruiterFeedback || ""

    };

};