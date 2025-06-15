

// components/JobCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/JobCard.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    if (job.isStatic) {
      alert("This is a demo job. You cannot apply to it.");
    } else {
      navigate(`/jobdetail/${job.id}`);
    }
  };

  return (
    <div className="job-card">
      <div className="logo-wrapper">
        {job.logo && (
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="company-logo"
          />
        )}
      </div>
      <h4>{job.title}</h4>
      <p>{job.company}</p>
      <p>{job.location} | {job.type}</p>
      <p className="salary">{job.salary}</p>
      <button
        className="apply-btn"
        onClick={handleApplyClick}
        disabled={job.isStatic}
        title={job.isStatic ? "Cannot apply to demo jobs" : "Apply for this job"}
      >
        {job.isStatic ? "Demo Only" : "Apply Now"}
      </button>
    </div>
  );
};

export default JobCard;
