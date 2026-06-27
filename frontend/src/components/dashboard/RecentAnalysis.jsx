import { Link } from "react-router-dom";

export default function RecentAnalysis({ resume }) {

    return (

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">

            <div>

                <h2 className="font-semibold text-lg">

                    📄 {resume.originalFileName}

                </h2>

                <p className="text-gray-500 mt-1">

                    {new Date(resume.createdAt).toLocaleString()}

                </p>

            </div>

            <div className="text-right">

                <p className="font-bold text-green-600">

                    ATS {resume.analysis.atsScore}%

                </p>

                <Link

                    to={`/history/${resume._id}`}

                    className="text-blue-600"

                >

                    View →

                </Link>

            </div>

        </div>

    );

}