import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import HistoryCard from "../components/history/HistoryCard";

import {
    getResumeHistory,
    deleteResume,
} from "../services/historyService";

export default function ResumeHistory() {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {

        try {

            const response = await getResumeHistory();

            setHistory(response.history);

        } catch (error) {

            toast.error("Unable to load history.");

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this resume analysis?"
        );

        if (!confirmDelete) return;

        try {

            await deleteResume(id);

            toast.success("Resume deleted.");

            setHistory((prev) =>
                prev.filter((resume) => resume._id !== id)
            );

        } catch (error) {

            toast.error("Delete failed.");

        }

    };

    const handleView = (id) => {

        navigate(`/history/${id}`);

    };

    return (

        <MainLayout>

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold">

                    Resume History

                </h1>

                <p className="text-gray-500 mt-2">

                    View all your previous AI resume analyses.

                </p>

                {
                    loading ? (

                        <p className="mt-10">

                            Loading...

                        </p>

                    ) : history.length === 0 ? (

                        <div className="bg-white mt-10 rounded-xl shadow p-10 text-center">

                            <h2 className="text-2xl font-semibold">

                                No Resume Analysis Yet

                            </h2>

                            <p className="text-gray-500 mt-3">

                                Upload your first resume to get started.

                            </p>

                        </div>

                    ) : (

                        <div className="mt-8 space-y-5">

                            {

                                history.map((resume) => (

                                    <HistoryCard

                                        key={resume._id}

                                        resume={resume}

                                        onDelete={handleDelete}

                                        onView={handleView}

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