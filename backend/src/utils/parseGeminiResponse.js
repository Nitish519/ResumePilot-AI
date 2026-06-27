const ApiError = require("./ApiError");

const parseGeminiResponse = (responseText) => {

    try {

        const cleaned = responseText
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

    } catch (error) {

       console.error(responseText);

        throw new ApiError(
        500,
        "Gemini returned invalid JSON."
        );

    }

};

module.exports = parseGeminiResponse;