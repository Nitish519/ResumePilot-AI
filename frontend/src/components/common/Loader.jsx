import { Brain, FileText, Search, Sparkles } from "lucide-react";

export default function Loader() {

    return (

        <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

            <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-4 rounded-full animate-pulse">

                    <Brain
                        size={32}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold">

                        ResumePilot AI

                    </h2>

                    <p className="text-slate-500">

                        Analyzing your resume...

                    </p>

                </div>

            </div>

            <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                    <FileText
                        size={20}
                        className="text-green-600"
                    />

                    <span>

                        Extracting text from your resume...

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <Search
                        size={20}
                        className="text-orange-500"
                    />

                    <span>

                        Comparing with ATS standards...

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <Sparkles
                        size={20}
                        className="text-purple-600"
                    />

                    <span>

                        Generating AI recruiter feedback...

                    </span>

                </div>

            </div>

            <div className="mt-8">

                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">

                    <div className="bg-blue-600 h-3 rounded-full animate-pulse w-2/3"></div>

                </div>

                <p className="text-center text-sm text-slate-500 mt-3">

                    Usually takes 20–40 seconds

                </p>

            </div>

        </div>

    );

}