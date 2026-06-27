// import { Link, useNavigate } from "react-router-dom";
// // import { Navigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";

// import Input from "../components/common/Input";

// import Button from "../components/common/Button";

// import { login as loginAPI } from "../services/authService";

// import useAuth from "../hooks/useAuth";

// export default function Login() {

//     const {

//         register,

//         handleSubmit,

//         formState: { errors, isSubmitting },

//     } = useForm();

//     const navigate = useNavigate();

//     const { login } = useAuth();

//     const onSubmit = async (data) => {

//         try {

//             const response = await loginAPI(data);

//             login(
//                 response.user,
//                 response.token
//             );

//             toast.success("Login Successful");

//             navigate("/dashboard");

//         }

//         catch (error) {

//             toast.error(

//                 error.response?.data?.message ||

//                 "Login Failed"

//             );

//         }

//     };

//     return (

//         <div className="min-h-screen flex justify-center items-center bg-gray-100">

//             <div className="bg-white rounded-xl shadow-lg p-10 w-[420px]">

//                 <h1 className="text-4xl font-bold text-center mb-2">

//                     Welcome Back

//                 </h1>

//                 <p className="text-gray-500 text-center mb-8">

//                     Login to ResumePilot AI

//                 </p>

//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="space-y-5"
//                 >

//                     <Input

//                         label="Email"

//                         name="email"

//                         placeholder="Enter email"

//                         register={register}

//                         errors={errors}

//                     />

//                     <Input

//                         label="Password"

//                         type="password"

//                         name="password"

//                         placeholder="Enter password"

//                         register={register}

//                         errors={errors}

//                     />

//                     <Button>

//                         {

//                             isSubmitting

//                                 ?

//                                 "Logging In..."

//                                 :

//                                 "Login"

//                         }

//                     </Button>

//                 </form>

//                 <p className="text-center mt-6">

//                     Don't have an account?

//                     <Link
//                         to="/register"
//                         className="text-blue-600 ml-2"
//                     >

//                         Register

//                     </Link>

//                 </p>

//             </div>

//         </div>

//     );

// }

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import { ShieldCheck, Sparkles, Brain, FileSearch, BadgeCheck } from "lucide-react";
import toast from "react-hot-toast";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { login as loginAPI } from "../services/authService";
import useAuth from "../hooks/useAuth";

export default function Login() {

    const {

        register,

        handleSubmit,

        formState: { errors, isSubmitting },

    } = useForm();

    const navigate = useNavigate();

    const { login } = useAuth();

    const location = useLocation();

    const from = location.state?.from || "/dashboard";

    const onSubmit = async (data) => {

        try {

            const response = await loginAPI(data);

            login(
                response.user,
                response.token
            );

            toast.success("Welcome back! 👋");

            // navigate("/dashboard", {
            //     replace: true,
            // });

            navigate(from, {
                replace: true,
            });

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

            {/* Left Section */}

            <div className="hidden lg:flex flex-col justify-center px-20 bg-gradient-to-br from-green-600 to-indigo-700 text-white">

                <div className="max-w-lg">

                    <div className="flex items-center gap-3 mb-8">

                        <Sparkles size={34} />

                        <h1 className="text-4xl font-bold">

                            ResumePilot AI

                        </h1>

                    </div>

                    <h2 className="text-5xl font-bold leading-tight">

                        Land More Interviews

                    </h2>

                    <p className="mt-6 text-blue-100 leading-8 text-lg">

                        Optimize your resume with AI-powered ATS analysis,
                        recruiter feedback, skill gap detection and interview
                        preparation.

                    </p>

                    <div className="mt-10 space-y-5">

                        <div className="flex items-center gap-3">

                            <BadgeCheck className="text-green-300" />

                            ATS Score & Resume Evaluation

                        </div>

                        <div className="flex items-center gap-3">

                            <Brain className="text-green-300" />

                            AI Recruiter Feedback

                        </div>

                        <div className="flex items-center gap-3">

                            <FileSearch className="text-green-300" />

                            Missing Skills & Keywords

                        </div>

                        <div className="flex items-center gap-3">

                            <ShieldCheck className="text-green-300" />

                            Secure Cloud Storage

                        </div>

                    </div>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center justify-center px-6">

                <div className="bg-blue w-full max-w-md rounded-3xl shadow-xl border border-slate-200 p-10">

                    <div className="text-center">

                        <h2 className="text-4xl font-bold">

                            Welcome Back

                        </h2>

                        <p className="text-slate-500 mt-3">

                            Login to continue your ResumePilot AI journey.

                        </p>

                    </div>

                    <form

                        onSubmit={handleSubmit(onSubmit)}

                        className="space-y-5 mt-10"

                    >

                        <Input

                            label="Email"

                            name="email"

                            placeholder="Enter your email"

                            register={register}

                            errors={errors}

                        />

                        <Input

                            label="Password"

                            name="password"

                            type="password"

                            placeholder="Enter your password"

                            register={register}

                            errors={errors}

                        />

                        <Button>

                            {

                                isSubmitting

                                    ?

                                    "Signing In..."

                                    :

                                    "Sign In"

                            }

                        </Button>

                    </form>

                    <div className="text-center mt-8">

                        <p className="text-slate-600">

                            Don't have an account?

                        </p>

                        <Link

                            to="/register"

                            className="text-blue-600 font-semibold hover:text-blue-700"

                        >

                            Create one for free →

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}