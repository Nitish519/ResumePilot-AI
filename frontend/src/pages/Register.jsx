// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// import Input from "../components/common/Input";
// import Button from "../components/common/Button";

// import { register as registerAPI } from "../services/authService";

// export default function Register() {

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm();

//     const navigate = useNavigate();

//     const onSubmit = async (data) => {

//         try {

//             const response = await registerAPI(data);

//             toast.success(response.message);

//             navigate("/login");

//         }

//         catch (error) {

//             toast.error(

//                 error.response?.data?.message ||

//                 "Registration Failed"

//             );

//         }

//     };

//     return (

//         <div className="min-h-screen flex justify-center items-center bg-gray-100">

//             <div className="bg-white rounded-xl shadow-lg p-10 w-[420px]">

//                 <h1 className="text-4xl font-bold text-center mb-2">

//                     Create Account

//                 </h1>

//                 <p className="text-gray-500 text-center mb-8">

//                     Join ResumePilot AI

//                 </p>

//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="space-y-5"
//                 >

//                     <Input
//                         label="Name"
//                         name="name"
//                         placeholder="Enter your name"
//                         register={register}
//                         errors={errors}
//                     />

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
//                                 ? "Creating..."
//                                 : "Register"
//                         }

//                     </Button>

//                 </form>

//                 <p className="text-center mt-6">

//                     Already have an account?

//                     <Link
//                         to="/login"
//                         className="text-blue-600 ml-2"
//                     >
//                         Login
//                     </Link>

//                 </p>

//             </div>

//         </div>

//     );

// }




import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import {
    Sparkles,
    Rocket,
    BadgeCheck,
    Brain,
    Target,
} from "lucide-react";

import toast from "react-hot-toast";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { register as registerAPI } from "../services/authService";
import useAuth from "../hooks/useAuth";




export default function Register() {

    const {

        register,

        handleSubmit,

        formState: { errors, isSubmitting },

    } = useForm();

    const { login } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

const from = location.state?.from || "/dashboard";

    const onSubmit = async (data) => {

        try {

           const response = await registerAPI(data);
//login user with signup
                login(
                    response.user,
                    response.token
                );

                toast.success("Welcome to ResumePilot AI! 🎉");

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

                "Registration Failed"

            );

        }

    };

    return (

        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

            {/* Left Section */}

            <div className="hidden lg:flex flex-col justify-center px-20 bg-gradient-to-br from-green-600 to-indigo-700  text-white">

                <div className="max-w-lg">

                    <div className="flex items-center gap-3 mb-8">

                        <Sparkles size={34} />

                        <h1 className="text-4xl font-bold">

                            ResumePilot AI

                        </h1>

                    </div>

                    <h2 className="text-5xl font-bold leading-tight">

                        Build a Resume

                        Recruiters Notice

                    </h2>

                    <p className="mt-6 text-blue-100 leading-8 text-lg">

                        Create your free account and unlock AI-powered
                        resume analysis, ATS scoring, recruiter insights,
                        and personalized interview preparation.

                    </p>

                    <div className="mt-10 space-y-5">

                        <div className="flex items-center gap-3">

                            <BadgeCheck className="text-green-300" />

                            ATS Optimization

                        </div>

                        <div className="flex items-center gap-3">

                            <Brain className="text-green-300" />

                            AI Resume Review

                        </div>

                        <div className="flex items-center gap-3">

                            <Target className="text-green-300" />

                            Job Match Analysis

                        </div>

                        <div className="flex items-center gap-3">

                            <Rocket className="text-green-300" />

                            Unlimited Resume Improvements

                        </div>

                    </div>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center justify-center px-6">

                <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

                    <div className="text-center">

                        <h2 className="text-4xl font-bold">

                            Create Account

                        </h2>

                        <p className="mt-3 text-slate-500">

                            Join ResumePilot AI and start improving your resume today.

                        </p>

                    </div>

                    <form

                        onSubmit={handleSubmit(onSubmit)}

                        className="mt-10 space-y-5"

                    >

                        <Input

                            label="Full Name"

                            name="name"

                            placeholder="Enter your full name"

                            register={register}

                            errors={errors}

                        />

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

                            placeholder="Create a password"

                            register={register}

                            errors={errors}

                        />

                        <Button>

                            {

                                isSubmitting

                                    ?

                                    "Creating Account..."

                                    :

                                    "Create Account"

                            }

                        </Button>

                    </form>

                    <div className="mt-8 text-center">

                        <p className="text-slate-600">

                            Already have an account?

                        </p>

                        <Link

                            to="/login"

                            className="font-semibold text-blue-600 hover:text-blue-700"

                        >

                            Sign In →

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}