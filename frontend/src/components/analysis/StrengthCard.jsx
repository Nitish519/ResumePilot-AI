// export default function StrengthCard({ strengths = [] }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Strengths

//             </h2>

//             <ul className="list-disc pl-6 space-y-2">

//                 {

//                     strengths.map((item, index) => (

//                         <li key={index}>

//                             {item}

//                         </li>

//                     ))

//                 }

//             </ul>

//         </div>

//     );

// }


import { CheckCircle2 } from "lucide-react";

export default function StrengthCard({ strengths = [] }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-green-100 p-3 rounded-xl">

                    <CheckCircle2
                        size={22}
                        className="text-green-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Strengths

                    </h2>

                    <p className="text-sm text-slate-500">

                        Key highlights identified by AI

                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {

                    strengths.length === 0 ? (

                        <p className="text-slate-500">

                            No strengths detected.

                        </p>

                    ) : (

                        strengths.map((item, index) => (

                            <div

                                key={index}

                                className="flex items-start gap-3"

                            >

                                <CheckCircle2

                                    size={18}

                                    className="text-green-500 mt-1 flex-shrink-0"

                                />

                                <p className="text-slate-700 leading-7">

                                    {item}

                                </p>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}