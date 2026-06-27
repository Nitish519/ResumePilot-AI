// export default function InterviewCard({ questions = [] }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Interview Questions

//             </h2>

//             <ol className="list-decimal pl-6 space-y-2">

//                 {

//                     questions.map((item, index) => (

//                         <li key={index}>

//                             {item}

//                         </li>

//                     ))

//                 }

//             </ol>

//         </div>

//     );

// }



import { MessageCircleQuestion } from "lucide-react";

export default function InterviewCard({ questions = [] }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-purple-100 p-3 rounded-xl">

                    <MessageCircleQuestion
                        size={22}
                        className="text-purple-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Interview Questions

                    </h2>

                    <p className="text-sm text-slate-500">

                        Questions you should prepare for

                    </p>

                </div>

            </div>

            {

                questions.length === 0 ? (

                    <p className="text-slate-500">

                        No interview questions generated.

                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            questions.map((question, index) => (

                                <div

                                    key={index}

                                    className="border border-slate-200 rounded-xl p-4 hover:border-purple-300 transition"

                                >

                                    <div className="flex gap-4">

                                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">

                                            {index + 1}

                                        </div>

                                        <p className="text-slate-700 leading-7">

                                            {question}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}