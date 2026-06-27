// export default function RecruiterCard({ feedback }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Recruiter Feedback

//             </h2>

//             <p>

//                 {feedback}

//             </p>

//         </div>

//     );

// }


import { MessageSquareQuote } from "lucide-react";

export default function RecruiterCard({ feedback }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-indigo-100 p-3 rounded-xl">

                    <MessageSquareQuote
                        size={22}
                        className="text-indigo-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Recruiter Feedback

                    </h2>

                    <p className="text-sm text-slate-500">

                        AI recruiter evaluation of your resume

                    </p>

                </div>

            </div>

            <div className="bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl p-5">

                <p className="text-slate-700 leading-8 italic">

                    "{feedback}"

                </p>

            </div>

        </div>

    );

}