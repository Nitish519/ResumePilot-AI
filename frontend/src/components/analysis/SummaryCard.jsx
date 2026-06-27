// export default function SummaryCard({ summary }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 Resume Summary

//             </h2>

//             <p>

//                 {summary}

//             </p>

//         </div>

//     );

// }

import { FileText } from "lucide-react";

export default function SummaryCard({ summary }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className="bg-blue-100 p-3 rounded-xl">

                    <FileText
                        size={22}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        Resume Summary

                    </h2>

                    <p className="text-sm text-slate-500">

                        AI generated overview of your resume

                    </p>

                </div>

            </div>

            <div className="border-l-4 border-blue-500 pl-5">

                <p className="text-slate-700 leading-8 text-[16px]">

                    {summary}

                </p>

            </div>

        </div>

    );

}