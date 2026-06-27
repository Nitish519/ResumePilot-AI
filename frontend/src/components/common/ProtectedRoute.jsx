import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();

    const location = useLocation();

    useEffect(() => {

        if (!loading && !user) {

            toast.error(

                "Please login to continue."

            );

        }

    }, [loading, user]);

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                Loading...

            </div>

        );

    }

    if (!user) {

        return (

            <Navigate

                to="/login"

                state={{

                    from: location.pathname,

                }}

                replace

            />

        );

    }

    return children;

}