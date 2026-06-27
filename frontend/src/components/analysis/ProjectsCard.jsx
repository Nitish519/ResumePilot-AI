// export default function ProjectsCard({ projects = [] }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Suggested Projects

//             </h2>

//             <ul className="list-disc pl-6 space-y-2">

//                 {

//                     projects.map((item, index) => (

//                         <li key={index}>

//                             {item}

//                         </li>

//                     ))

//                 }

//             </ul>

//         </div>

//     );

// }


import { FolderGit2 } from "lucide-react";

export default function ProjectsCard({ projects = [] }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-blue-100 p-3 rounded-xl">

                    <FolderGit2
                        size={22}
                        className="text-green-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Suggested Projects

                    </h2>

                    <p className="text-sm text-slate-500">

                        Projects that can strengthen your resume

                    </p>

                </div>

            </div>

            {

                projects.length === 0 ? (

                    <p className="text-slate-500">

                        🎉 No additional project recommendations.

                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            projects.map((project, index) => (

                                <div

                                    key={index}

                                    className="border border-slate-200 rounded-xl p-4 hover:border-green-300 hover:shadow-sm transition"

                                >

                                    <div className="flex gap-3">

                                        <div className="mt-1">

                                            <FolderGit2
                                                size={18}
                                                className="text-green-600"
                                            />

                                        </div>

                                        <p className="text-slate-700 leading-7">

                                            {project}

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