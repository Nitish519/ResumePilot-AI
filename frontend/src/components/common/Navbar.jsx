import {
    LayoutDashboard,
    Upload,
    History,
    LogOut,
    UserCircle2,
    FileText,
} from "lucide-react";

import {
    Link,
    NavLink,
    useNavigate,
} from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

export default function Navbar() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const handleLogout = () => {

        logout();

         toast.success("Logged out successfully");

        navigate("/dashboard", {
            replace : true,
        });

    };

    const navClass = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
            isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-slate-600 hover:bg-slate-100"
        }`;

    return (

        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-4 lg:px-6">

                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}

                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 shrink-0"
                    >

                        {/* <div className="bg-blue-600 text-white rounded-xl p-2">

                            <FileText size={22} />

                        </div> */}

                        <div className="rounded-xl overflow-hidden">

    <img
        src="/logo.png"
        alt="ResumePilot AI"
        className="h-12 w-12 object-cover"
    />

</div>

                        <div className="hidden sm:block">

                            <h1 className="font-bold text-xl text-slate-900">

                                ResumePilot AI

                            </h1>

                            <p className="text-xs text-slate-500">

                                Optimize. Analyze. Get Hired.

                            </p>

                        </div>

                    </Link>

                    {/* Center Navigation */}

                    <nav className="flex items-center gap-1">

                        <NavLink
                            to="/dashboard"
                            className={navClass}
                        >

                            <LayoutDashboard size={18} />

                            <span className="hidden md:inline">

                                Dashboard

                            </span>

                        </NavLink>

                        {

                            user && (

                                <>

                                    <NavLink
                                        to="/upload"
                                        className={navClass}
                                    >

                                        <Upload size={18} />

                                        <span className="hidden md:inline">

                                            Upload

                                        </span>

                                    </NavLink>

                                    <NavLink
                                        to="/history"
                                        className={navClass}
                                    >

                                        <History size={18} />

                                        <span className="hidden md:inline">

                                            History

                                        </span>

                                    </NavLink>

                                </>

                            )

                        }

                    </nav>

                    {/* Right */}

                    {

                        user ? (

                            <div className="flex items-center gap-3">

                                <div className="hidden md:flex items-center gap-2">

                                    <UserCircle2
                                        size={30}
                                        className="text-slate-500"
                                    />

                                    <span className="font-medium">

                                        {user.name}

                                    </span>

                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
                                >

                                    <LogOut size={18} />

                                    <span className="hidden sm:inline">

                                        Logout

                                    </span>

                                </button>

                            </div>

                        ) : (

                            <div className="flex items-center gap-2">

                                <Link
                                    to="/login"
                                    className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                                >

                                    Login

                                </Link>

                                <Link
                                    to="/register"
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                >

                                    Register

                                </Link>

                            </div>

                        )

                    }

                </div>

            </div>

        </header>

    );

}