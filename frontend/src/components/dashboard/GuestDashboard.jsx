import { Link } from "react-router-dom";
import {
    FileText,
    Brain,
    Target,
    BadgeCheck,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export default function GuestDashboard() {

    const features = [
        {
            icon: <Target size={30} className="text-blue-600" />,
            title: "ATS Score",
            description:
                "Instantly see how well your resume performs with Applicant Tracking Systems.",
        },
        {
            icon: <Brain size={30} className="text-purple-600" />,
            title: "AI Recruiter Feedback",
            description:
                "Receive personalized feedback just like a technical recruiter.",
        },
        {
            icon: <BadgeCheck size={30} className="text-green-600" />,
            title: "Skill Gap Analysis",
            description:
                "Discover missing skills and keywords for your dream role.",
        },
        {
            icon: <Sparkles size={30} className="text-orange-500" />,
            title: "Interview Preparation",
            description:
                "Generate interview questions based on your resume.",
        },
    ];

    return (

        <>

            {/* Hero */}

            <section className="text-center py-1">

                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                    <Sparkles size={18} />

                    AI Powered Resume Analyzer

                </div>

                <h1 className="text-5xl font-bold mt-5 leading-tight">

                    Land More Interviews

                    <br />

                    with ResumePilot AI

                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600">

                    Upload your resume and receive ATS analysis,
                    recruiter feedback, missing skills, project suggestions,
                    and interview questions — powered by AI.

                </p>

                <div className="flex justify-center gap-4 mt-10">

                    <Link
                        to="/register"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
                    >

                        Get Started

                        <ArrowRight size={18} />

                    </Link>

                    <Link
                        to="/upload"
                        className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-blue-400 font-semibold"
                    >

                       Upload Resume

                    </Link>

                </div>

            </section>

            {/* Features */}

            <section className="mt-12">

                <h2 className="text-3xl font-bold text-center">

                    Everything You Need

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                    {

                        features.map((feature) => (

                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
                            >

                                {feature.icon}

                                <h3 className="text-xl font-semibold mt-5">

                                    {feature.title}

                                </h3>

                                <p className="text-slate-600 mt-3 leading-7">

                                    {feature.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </section>

            {/* Steps */}

            <section className="mt-20">

                <h2 className="text-3xl font-bold text-center">

                    How It Works

                </h2>

                <div className="grid md:grid-cols-4 gap-6 mt-10">

                    {

                        [

                            "Upload Resume",

                            "AI Analysis",

                            "Improve Resume",

                            "Land Interviews",

                        ].map((step, index) => (

                            <div
                                key={step}
                                className="bg-white rounded-xl border border-slate-200 p-6 text-center"
                            >

                                <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">

                                    {index + 1}

                                </div>

                                <h3 className="font-semibold mt-5">

                                    {step}

                                </h3>

                            </div>

                        ))

                    }

                </div>

            </section>

        </>

    );

}