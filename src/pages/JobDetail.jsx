import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import "../css/JobDetail.css";

const JobDetail = () => {
  const { jobId } = useParams(); //iam collecting teh params here
  const { jobs } = useJobContext();
  //calling the saved jobs in the context
                                    // (works properly in other pages)
  const navigate = useNavigate();
  

  const job = jobs.find((j) => j.id?.toString() === jobId);
  

  const handleApplyClick = () => {
    navigate(`/apply/${job.id}`);

  };
  

  return (
  <div className="job-detail-container">
    {/* Blue Hero Section */}
    <div className="job-hero">
      <h1 className="job-title-text">
        {job.title?.toUpperCase()} at {job.company?.toUpperCase()}
      </h1>
      <button className="job-apply-btn" onClick={handleApplyClick}>
        APPLY FOR THIS JOB
      </button>
    </div>

    {/* White Detail Section */}
    <div className="job-body">
      <div className="job-meta">
        {job.logo && (
          <img src={job.logo} alt="Company Logo" className="job-logo" />
        )}
        <div className="job-info">
          <p><strong>{job.title}</strong> ({job.type})</p>
          <p>{job.company} – {job.location}</p>
          <p>{job.salary} • Benefits</p>
        </div>
      </div>

      <div className="job-description">
        <h3>About this role</h3>
        <p>{job.description}</p>
        <p>🎓 Experience: {job.experience || "N/A"} years</p>
      </div>
    </div>
  </div>
);


};

export default JobDetail;
