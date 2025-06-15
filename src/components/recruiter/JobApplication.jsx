import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/ApplicationContext";
import "../../css/recruiters/JobApplications.css";

const stages = [
  "Application Received",   // default initial status
  "Phone Interview",
  "In-Person Interview",
  "HR Interview",
  "Rejected",               // optional
]; 

const getStatusIndex = (status) => stages.indexOf(status);

const JobApplications = () => {
  const { jobId } = useParams();
  const { applications } = useApplicationContext();
  const navigate = useNavigate();

  const filteredApplicants = applications.filter(app => app.jobId === jobId);

  return (
    <div className="job-applications-container">
      <h1 className="jobapplication-title">Applicant Progress Tracker</h1>
      <div className="applicants-list">
        {filteredApplicants.map((applicant, index) => {
          const currentIndex = getStatusIndex(applicant.status);

          return (
            <div
              key={index}
              className="applicant-card"
              onClick={() =>
                navigate(`/recruiter/applicant-review/${jobId}/${applicant.studentId}`)
              }
            >
              <h3>{applicant.studentId}</h3>
              <div className="progress-bar">
                {stages.map((stage, i) => {
                  const isActive = i === currentIndex;
                  const isCompleted = i < currentIndex;

                  return (
                    <React.Fragment key={stage}>
                      <div
                        className={`stage ${isCompleted ? "completed" : ""} ${
                          isActive ? "active" : ""
                        }`}
                        title={stage}
                      >
                        {stage}
                      </div>
                      {i < stages.length - 1 && (
                        <div
                          className={`arrow ${
                            i < currentIndex ? "arrow-active" : ""
                          }`}
                        >
                          →
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="current-status">
                Current Status: {applicant.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobApplications;
