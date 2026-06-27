// export default function WeaknessCard({ weaknesses = [] }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Weaknesses

//             </h2>

//             <ul className="list-disc pl-6 space-y-2">

//                 {

//                     weaknesses.map((item, index) => (

//                         <li key={index}>

//                             {item}

//                         </li>

//                     ))

//                 }

//             </ul>

//         </div>

//     );

// }

import { AlertTriangle } from "lucide-react";

export default function WeaknessCard({ weaknesses = [] }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-orange-100 p-3 rounded-xl">

                    <AlertTriangle
                        size={22}
                        className="text-orange-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Areas for Improvement

                    </h2>

                    <p className="text-sm text-slate-500">

                        Suggestions to strengthen your resume

                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {

                    weaknesses.length === 0 ? (

                        <p className="text-slate-500">

                            No major weaknesses detected. 🎉

                        </p>

                    ) : (

                        weaknesses.map((item, index) => (

                            <div

                                key={index}

                                className="flex items-start gap-3"

                            >

                                <AlertTriangle

                                    size={18}

                                    className="text-orange-500 mt-1 flex-shrink-0"

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