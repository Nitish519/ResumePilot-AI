import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import AnalysisSection from "../components/analysis/AnalysisSection";

import { getResumeById } from "../services/historyService";

export default function ResumeDetails() {

    const { id } = useParams();

    const [resume, setResume] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadResume();

    }, []);

    const loadResume = async () => {

        try {

            const response = await getResumeById(id);

            setResume(response.resume);

        } catch (error) {

            toast.error("Unable to load analysis.");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <MainLayout>

                <p className="mt-10">

                    Loading...

                </p>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold">

                    {resume.originalFileName}

                </h1>

                <p className="text-gray-500 mt-2">

                    Uploaded on{" "}

                    {new Date(
                        resume.createdAt
                    ).toLocaleString()}

                </p>

                <AnalysisSection
                    analysis={resume.analysis}
                />

            </div>

        </MainLayout>

    );

}