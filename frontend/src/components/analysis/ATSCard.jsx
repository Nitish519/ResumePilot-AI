// export default function ATSCard({ score }) {

//     return (

//         <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="text-2xl font-bold mb-4">

//                 ATS Score

//             </h2>

//             <div className="flex items-center justify-between">

//                 <p className="text-6xl font-bold text-green-600">

//                     {score}%

//                 </p>

//                 <div className="text-right">

//                     <p className="text-gray-500">

//                         Overall Resume Score

//                     </p>

//                 </div>

//             </div>

//         </div>

//     );

// }


import { TrendingUp } from "lucide-react";

export default function ATSCard({ score }) {

    const getScoreColor = () => {

        if (score >= 85) return "text-green-600";
        if (score >= 70) return "text-yellow-500";
        return "text-red-500";

    };

    const getProgressColor = () => {

        if (score >= 85) return "bg-green-500";
        if (score >= 70) return "bg-yellow-500";
        return "bg-red-500";

    };

    const getRemark = () => {

        if (score >= 85) return "Excellent Resume";
        if (score >= 70) return "Good Resume";
        if (score >= 50) return "Average Resume";

        return "Needs Improvement";

    };

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        ATS Score

                    </h2>

                    <p className="text-sm text-slate-500 mt-1">

                        Overall Resume Score

                    </p>

                </div>

                <div className="bg-blue-100 p-3 rounded-xl">

                    <TrendingUp
                        size={24}
                        className="text-blue-600"
                    />

                </div>

            </div>

            <div className="mt-8 flex items-end justify-between">

                <div>

                    <h1 className={`text-6xl font-bold ${getScoreColor()}`}>

                        {score}%

                    </h1>

                    <p className="text-slate-500 mt-2">

                        {getRemark()}

                    </p>

                </div>

            </div>

            <div className="mt-6">

                <div className="w-full bg-slate-200 rounded-full h-3">

                    <div

                        className={`${getProgressColor()} h-3 rounded-full transition-all duration-700`}

                        style={{

                            width: `${score}%`

                        }}

                    />

                </div>

            </div>

        </div>

    );

}