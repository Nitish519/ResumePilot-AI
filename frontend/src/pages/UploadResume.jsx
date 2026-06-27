// import { useState, useRef, useEffect } from "react";
// import toast from "react-hot-toast";

// import MainLayout from "../layouts/MainLayout";

// import DragDrop from "../components/upload/DragDrop";
// import JobDescription from "../components/upload/JobDescription";
// import Button from "../components/common/Button";
// import AnalysisSection from "../components/analysis/AnalysisSection";
// import PageHeader from "../components/common/PageHeader";

// import { analyzeResume as analyzeResumeAPI } from "../services/resumeService";

// export default function UploadResume() {

//     const [selectedFile, setSelectedFile] = useState(null);

//     const [jobDescription, setJobDescription] = useState("");

//     const [loading, setLoading] = useState(false);

//     const [analysis, setAnalysis] = useState(null);

//     const analysisRef = useRef(null);

//     const handleAnalyze = async () => {

//         if (!selectedFile) {
//             toast.error("Please upload a resume.");
//             return;
//         }

//         try {

//             setLoading(true);

//             const response = await analyzeResumeAPI(
//                 selectedFile,
//                 jobDescription
//             );

//             console.log(response);

//            setAnalysis(response.analysis);

//             toast.success("Analysis Complete 🎉");

//         } catch (error) {

//             toast.error(
//                 error.response?.data?.message ||
//                 "Analysis Failed"
//             );

//         } finally {

//             setLoading(false);

//         }

//     };

//     useEffect(() => {

//     if (analysis && analysisRef.current) {

//         setTimeout(() => {

//             analysisRef.current.scrollIntoView({

//                 behavior: "smooth",

//                 block: "start",

//             });

//         }, 250);

//     }

// }, [analysis]);



//     console.log("Analysis State:", analysis);

//     return (

//         <MainLayout>

//             <div className="max-w-5xl mx-auto">

//                 <PageHeader

//                 title="Upload Resume"

//                 subtitle="Upload your resume and optionally add a Job Description for a more accurate ATS score, job match analysis and recruiter feedback."

//                 />

//                 <div className="mt-8">

//                     <DragDrop
//                         selectedFile={selectedFile}
//                         setSelectedFile={setSelectedFile}
//                     />

//                     <JobDescription
//                         jobDescription={jobDescription}
//                         setJobDescription={setJobDescription}
//                     />

//                    <div className="flex justify-center mt-8">

//                     <Button

//                     onClick={handleAnalyze}

//                     className="px-10"

//                     >

//                     {

//                     loading

//                     ?

//                     "Analyzing Resume..."

//                     :

//                     "🚀 Analyze Resume"

//                     }

//                     </Button>

//                     </div>

//                 </div>

//                      {
//             analysis && (

//                 <div
//                     ref={analysisRef}
//                 >

//                     <AnalysisSection
//                         analysis={analysis}
//                     />

//                 </div>

//             )
//         }

//             </div>

//         </MainLayout>

//     );

// }


import { useState, useRef, useEffect} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DragDrop from "../components/upload/DragDrop";
import JobDescription from "../components/upload/JobDescription";
import Button from "../components/common/Button";
import AnalysisSection from "../components/analysis/AnalysisSection";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";


import useAuth from "../hooks/useAuth";
import { analyzeResume as analyzeResumeAPI } from "../services/resumeService";

export default function UploadResume() {

    const [selectedFile, setSelectedFile] = useState(null);

    const [jobDescription, setJobDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const [analysis, setAnalysis] = useState(null);

    const analysisRef = useRef(null);

    const navigate = useNavigate();

const { user } = useAuth();

const handleAnalyze = async () => {

   if (!user) {

    toast("🔒 Please login to analyze your resume.");

    navigate("/login", {
        state: {
            from: "/upload",
        },
    });

    return;

}

    // Existing analyze logic...

        if (!selectedFile) {

            toast.error("Please upload a resume.");

            return;

        }

        try {

            // Remove previous analysis
            setAnalysis(null);

            setLoading(true);

            const response = await analyzeResumeAPI(

                selectedFile,

                jobDescription

            );

            setAnalysis(response.analysis);

          toast.success("Analysis Complete! Scroll to see your results 🚀");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Analysis Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (analysis && analysisRef.current) {

            setTimeout(() => {

                analysisRef.current.scrollIntoView({

                    behavior: "smooth",

                    block: "start",

                });

            }, 300);

        }

    }, [analysis]);

    

    return (

        <MainLayout>

            <div className="max-w-5xl mx-auto">

                <PageHeader

                    title="Upload Resume"

                    subtitle="Upload your resume and optionally add a Job Description for a more accurate ATS score, job match analysis and recruiter feedback."

                />

                <div className="mt-8">

                    <DragDrop

                        selectedFile={selectedFile}

                        setSelectedFile={setSelectedFile}

                    />

                    <JobDescription

                        jobDescription={jobDescription}

                        setJobDescription={setJobDescription}

                    />

                    <div className="flex justify-center mt-8">

                        <Button

                            onClick={handleAnalyze}

                            disabled={loading}

                            className="px-10"

                        >

                            {

                                loading

                                    ?

                                    "🤖 Analyzing Resume..."

                                    :

                                    "🚀 Analyze Resume"

                            }

                        </Button>

                    </div>

                </div>

                {/* AI Loader */}

                {

                    loading && (

                        <Loader />

                    )

                }

                {/* Analysis */}

                {

                    analysis && (

                        <div

                            ref={analysisRef}

                            className="mt-6"

                        >

                            <AnalysisSection

                                analysis={analysis}

                            />

                        </div>

                    )

                }

            </div>

        </MainLayout>

    );

}