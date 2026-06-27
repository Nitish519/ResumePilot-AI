const pdf = require("pdf-parse");

// console.log(typeof pdf);
// console.log(pdf);

const extractTextFromPDF = async (buffer) => {

    const data = await pdf(buffer);

    return data.text.trim();

};

module.exports = {
    extractTextFromPDF,
};