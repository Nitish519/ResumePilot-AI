export default function JobDescription({

    jobDescription,

    setJobDescription,

}) {

    return (
<>

        <textarea

            rows={6}

            value={jobDescription}

            onChange={(e) =>
                setJobDescription(
                    e.target.value
                )
            }

           placeholder={`Paste the Job Description here (Optional)

Adding a Job Description help us compare your resume against the role and provide a much more accurate evaluation.
Example:
Software Engineer Intern

Requirements:
• React
• Node.js
• MongoDB
• Docker
• REST APIs
`}

            className="w-full mt-8 rounded-xl border p-5 outline-none resize-none focus:ring-2 focus:ring-blue-500"

        />

      <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-4">

    <h3 className="font-semibold text-blue-700">

        💡 Why add a Job Description?

    </h3>

    <div className="grid md:grid-cols-2 gap-2 mt-3 text-sm text-blue-700">

        <p>✓ Better ATS Score</p>

        <p>✓ Accurate Job Match</p>

        <p>✓ Missing Skills Detection</p>

        <p>✓ Personalized Suggestions</p>

    </div>

</div>

        
</>
    );

}