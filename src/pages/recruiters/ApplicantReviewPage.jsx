import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from "../../context/ApplicationContext";
import ApplicantDetails from "../../components/recruiter/ApplicantDetails";
import ResumeViewer from "../../components/recruiter/ResumeViewer";
import InterviewStatusBar from "../../components/recruiter/InterviewStatusBar";
import InterviewStageTracker from "../../components/recruiter/InterviewStageTracker";
import "../../css/recruiters/ApplicantReviewPage.css";

const ApplicantReviewPage = () => {
  const { jobId, studentId } = useParams();
  const navigate = useNavigate();
  const { applications,updateApplicationStatus } = useApplicationContext();
  const stageRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentStage, setCurrentStage] = useState(1);

  const applicant = applications.find(
    (a) => a.jobId === jobId && a.studentId === studentId
  );
  const handleReject = () => {
  updateApplicationStatus(studentId, jobId, "Rejected");
  alert(`Rejected application for ${studentId}`);
  navigate(`/recruiter/job-applications/${jobId}`);
};

  return (
    <div className="page-container">
      {applicant ? (
        <>
          <ApplicantDetails
            applicant={{
              name: applicant.studentId,
              description: "",
              coverLetter: applicant.coverLetter,
            }}
          />
          <ResumeViewer fileUrl={applicant.resumeBase64} />
          <InterviewStatusBar stageRefs={stageRefs} currentStage={currentStage} />
          <InterviewStageTracker
            stageRefs={stageRefs}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            studentId={studentId}
            jobId={jobId}
          />
          <button className="reject-btn" onClick={handleReject}>
  Reject Application
</button>
        </>
      ) : (
        <p>No application found.</p>
      )}
    </div>
  );
};

export default ApplicantReviewPage;
