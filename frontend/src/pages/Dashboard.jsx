import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import PageHeader from "../components/common/PageHeader";
import StatsCard from "../components/dashboard/StatsCard";
import RecentAnalysis from "../components/dashboard/RecentAnalysis";


import GuestDashboard from "../components/dashboard/GuestDashboard";
import { getResumeHistory } from "../services/historyService";

import useAuth from "../hooks/useAuth";


import { Link } from "react-router-dom";
import {
    Upload,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export default function Dashboard() {

    const { user } = useAuth();

    const [history, setHistory] = useState([]);

   useEffect(() => {

    if (user) {

        loadDashboard();

            }

        }, [user]);

    const loadDashboard = async () => {

        try {

            const response = await getResumeHistory();

            setHistory(response.history);

        }

        catch (error) {

            console.log(error);

        }

    };

    const totalAnalyses = history.length;

    const averageATS =

        totalAnalyses === 0

            ? 0

            : Math.round(

                history.reduce(

                    (sum, resume) =>

                        sum + resume.analysis.atsScore,

                    0

                ) / totalAnalyses

            );

    const bestATS =

        totalAnalyses === 0

            ? 0

            : Math.max(

                ...history.map(

                    (resume) => resume.analysis.atsScore

                )

            );

    // const latestResume =

    //     history.length > 0

    //         ? history[0].originalFileName

    //         : "No Resume";

            if (!user) {

    return (

        <MainLayout>

            <div className="max-w-7xl mx-auto">

                <GuestDashboard />

            </div>

        </MainLayout>

    );

}

    return (

        <MainLayout>

            <div className="max-w-7xl mx-auto">

                <PageHeader

                    title={`Welcome back, ${user?.name} 👋`}

                    subtitle="Track your resume performance and improve your chances with AI."

                    buttonText="Upload Resume"

                    buttonLink="/upload"

                />

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <StatsCard

                        title="Total Analyses"

                        value={totalAnalyses}

                        icon="analyses"

                    />

                    <StatsCard

                        title="Average ATS"

                        value={`${averageATS}%`}

                        icon="average"

                    />

                    <StatsCard

                        title="Best ATS"

                        value={`${bestATS}%`}

                        icon="best"

                    />

                    {/* <StatsCard

                        title="Latest Resume"

                        value={latestResume}

                        // icon="latest"

                    /> */}

                </div>

                {/* Recent Analysis */}

                <div className="flex items-center justify-between mt-12 mb-6">

                    <h2 className="text-3xl font-bold">

                        Recent Analyses

                    </h2>

                </div>

                {

                    history.length === 0 ? (

                        // <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">

                        //     <h2 className="text-2xl font-bold">

                        //         No Resume Analysis Yet

                        //     </h2>

                        //     <p className="text-slate-500 mt-3">

                        //         Upload your first resume to receive an AI-powered analysis.

                        //     </p>

                        // </div>

                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10">

    <div className="flex flex-col items-center text-center">

        <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">

            <Sparkles
                className="text-blue-600"
                size={40}
            />

        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">

            Start Your First Resume Analysis

        </h2>

        <p className="mt-3 text-slate-500 max-w-xl">

            Upload your resume and receive an AI-powered ATS score,
            recruiter feedback, missing skills analysis,
            project suggestions and interview questions.

        </p>

        <Link
            to="/upload"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
        >

            <Upload size={20} />

            Upload Resume

            <ArrowRight size={18} />

        </Link>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        <div className="rounded-2xl bg-slate-50 p-6">

            <h3 className="font-semibold text-slate-800">

                🤖 AI Resume Review

            </h3>

            <p className="text-slate-500 text-sm mt-2">

                Get instant AI-powered feedback on your resume.

            </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-6">

            <h3 className="font-semibold text-slate-800">

                📈 ATS Optimization

            </h3>

            <p className="text-slate-500 text-sm mt-2">

                Improve your ATS score and increase interview chances.

            </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-6">

            <h3 className="font-semibold text-slate-800">

                🎯 Interview Preparation

            </h3>

            <p className="text-slate-500 text-sm mt-2">

                Receive personalized interview questions based on your resume.

            </p>

        </div>

    </div>

</div>

                    ) : (

                        <div className="space-y-4">

                            {

                                history.slice(0, 3).map((resume) => (

                                    <RecentAnalysis

                                        key={resume._id}

                                        resume={resume}

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </MainLayout>

    );

}




