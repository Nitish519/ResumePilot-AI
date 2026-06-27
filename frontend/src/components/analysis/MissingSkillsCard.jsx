// export default function MissingSkillsCard({ skills = [] }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Missing Skills

//             </h2>

//             <div className="flex flex-wrap gap-2">

//                 {

//                     skills.map((skill, index) => (

//                         <span
//                             key={index}
//                             className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
//                         >
//                             {skill}
//                         </span>

//                     ))

//                 }

//             </div>

//         </div>

//     );

// }



import { Wrench } from "lucide-react";

export default function MissingSkillsCard({ skills = [] }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-red-100 p-3 rounded-xl">

                    <Wrench
                        size={22}
                        className="text-red-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Missing Skills

                    </h2>

                    <p className="text-sm text-slate-500">

                        Skills recommended for your target role

                    </p>

                </div>

            </div>

            {

                skills.length === 0 ? (

                    <p className="text-slate-500">

                        🎉 Great! No major missing skills detected.

                    </p>

                ) : (

                    <div className="flex flex-wrap gap-3">

                        {

                            skills.map((skill, index) => (

                                <span

                                    key={index}

                                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition"

                                >

                                    {skill}

                                </span>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}