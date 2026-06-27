const ai = require("../config/gemini");

const analyzeResume = async (prompt) => {

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
};

module.exports = {
    analyzeResume,
};