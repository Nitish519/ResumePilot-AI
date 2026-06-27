import Button from "../common/Button";

export default function HistoryCard({

    resume,

    onView,

    onDelete,

}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">

            <div>

                <h2 className="text-xl font-semibold">

                    📄 {resume.originalFileName}

                </h2>

                <p className="text-gray-500 mt-1">

                    Uploaded on{" "}

                    {new Date(
                        resume.createdAt
                    ).toLocaleDateString()}

                </p>

                <div className="flex gap-6 mt-4">

                    <p>

                        <span className="font-bold">

                            ATS

                        </span>

                        {" "}

                        {resume.analysis.atsScore}%

                    </p>

                    <p>

                        <span className="font-bold">

                            Job Match

                        </span>

                        {" "}

                        {resume.analysis.jobMatchScore}%

                    </p>

                </div>

            </div>

            <div className="flex gap-3">

                <Button

                    onClick={() =>
                        onView(resume._id)
                    }

                >

                    View

                </Button>

                <button

                    onClick={() =>
                        onDelete(resume._id)
                    }

                    className="bg-red-500 text-white px-5 py-2 rounded-lg"

                >

                    Delete

                </button>

            </div>

        </div>

    );

}