import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

import { Sparkles, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-24">




            {/* Footer */}

            <section className="bg-slate-950 text-slate-300 mt-10 rounded-t-3xl">

                <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

                    {/* Brand */}

                    <div>

                        <div className="flex items-center gap-3">

                            <img
                                src="/logo.png"
                                alt="ResumePilot AI"
                                className="h-12 w-12 rounded-xl"
                            />

                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    ResumePilot AI

                                </h2>

                                <p className="text-slate-400">

                                    Optimize. Analyze. Get Hired.

                                </p>

                            </div>

                        </div>

                        <p className="mt-6 leading-8 text-slate-400">

                            AI-powered resume analyzer helping
                            students improve ATS score,
                            recruiter appeal and interview readiness.

                        </p>

                        <div className="mt-6 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-blue-300 text-sm">

                            🤖 Powered by Google Gemini AI

                        </div>

                    </div>




                    {/* Social */}

                    <div>

                        <h3 className="text-xl font-semibold text-white mb-5">

                            Connect

                        </h3>

                        <div className="space-y-4">

                            <a
                                href="https://github.com/Nitish519"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition"
                            >
                                <FaGithub />

                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR_LINKEDIN"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition"
                            >
                                <FaLinkedin />

                                LinkedIn
                            </a>

                            <a
                                href="mailto:bairwanitish071@gmail.com"
                                className="flex items-center gap-3 hover:text-white transition"
                            >
                                <FaEnvelope />

                                Email
                            </a>

                        </div>

                        
                  

            

                    </div>

                      <p className="mt-8 text-blue-100">

                        ⭐⭐⭐⭐⭐ Trusted by students preparing for internships and placements

                    </p>

                </div>

                <div className="border-t border-slate-800">

                    <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

                        <p>

                            © 2026 ResumePilot AI. All rights reserved.

                        </p>

                        <p className="mt-3 md:mt-0">

                            Built with ❤️ by <span className="text-white font-semibold">Nitish Bairwa</span>

                        </p>

                    </div>

                </div>

            </section>

        </footer>
    );
}