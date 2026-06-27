import ATSCard from "./ATSCard";
import SummaryCard from "./SummaryCard";
import StrengthCard from "./StrengthCard";
import WeaknessCard from "./WeaknessCard";
import MissingSkillsCard from "./MissingSkillsCard";
import ProjectsCard from "./ProjectsCard";
import InterviewCard from "./InterviewCard";
import RecruiterCard from "./RecruiterCard";

export default function AnalysisSection({ analysis }) {

    if (!analysis) {
        return null;
    }
    return (

        <div className="grid gap-6 mt-6">

            <ATSCard
                score={analysis.atsScore}
            />

            <SummaryCard
                summary={analysis.summary}
            />

            <StrengthCard
                strengths={analysis.strengths}
            />

            <WeaknessCard
                weaknesses={analysis.weaknesses}
            />

            <MissingSkillsCard
                skills={analysis.missingSkills}
            />

            <ProjectsCard
                projects={analysis.suggestedProjects}
            />

            <InterviewCard
                questions={analysis.interviewQuestions}
            />

            <RecruiterCard
                feedback={analysis.recruiterFeedback}
            />

        </div>

    );

}