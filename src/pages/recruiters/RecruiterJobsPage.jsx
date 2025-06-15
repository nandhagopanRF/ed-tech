import React from 'react';
import '../../css/RecruitersPostJobs.css';
import { useNavigate } from 'react-router-dom';
import { useRecruitersJobContext } from '../../context/RecruitersJobContext';
//image demo k liye try karra hu
import pic from '../../assets/images/recruiter.png'

function RecruiterJobsPage() {
  const navigate = useNavigate();
  const { jobs, deleteJob } = useRecruitersJobContext();

  return (
    <div className="recruiter-jobs-container">
      {/* <aside className="recruiter-jobs-sidebar">
        <h3>Filters</h3>
        <hr />
      </aside> */}

      <main className="recruiter-jobs-main">
        <div className="recruiter-jobs-header">
          <button
            className="recruiter-jobs-btn"
            onClick={() => navigate('/recruiter/post-jobs')}
          >
            Post Job
          </button>
        </div>

        {jobs.length === 0 ? (
          <p>No jobs posted yet.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="recruiter-jobs-card">
              <div className="recruiter-jobs-info">
                <h2>{job.company}</h2>
                <p>{job.title}</p>
                {job.salary && (
                  <span className="recruiter-jobs-salary">{job.salary}</span>
                )}
              </div>
              <div className="recruiter-jobs-actions">
                <button className="recruiter-jobs-btn" onClick={() => navigate(`/recruiter/job-applications/${job.id}`)}>View</button>
                <button
                  className="recruiter-jobs-btn recruiter-jobs-delete-btn"
                  onClick={() => deleteJob(job.id)}
                >
                  Delete
                </button>
                
              </div>
              <div className="recruiter-jobs-logo">
                <img
                  src={pic}
                  alt={`${job.company} Logo`}
                />
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default RecruiterJobsPage;
