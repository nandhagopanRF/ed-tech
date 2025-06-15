import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApplicationContext } from "../context/ApplicationContext";
import "../css/ApplyPage.css"; // ⬅️ Add this line

const ApplyPage = () => {
  const { jobId } = useParams();
  const { addApplication } = useApplicationContext();
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setResume(reader.result); // base64 encoded
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only PDF files are supported.");
    }
  };

  const handleSubmit = () => {
    const application = {
      jobId,
      studentId: "arun", // simulate current logged-in student
      coverLetter,
      resumeBase64: resume,
    };
    addApplication(application);
    alert("Application submitted!");
    navigate("/feed");
  };

  return (
    <div className="add-appl-container">
      <h2 className="add-appl-heading">Apply for Job</h2>

      <label className="add-appl-label">Cover Letter</label>
      <textarea
        className="add-appl-textarea"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
      />

      <label className="add-appl-label">Upload Resume (PDF)</label>
      <input
        className="add-appl-file-input"
        type="file"
        accept="application/pdf"
        onChange={handleResumeUpload}
      />

      <button className="add-appl-submit-btn" onClick={handleSubmit}>
        Submit Application
      </button>
    </div>
  );
};

export default ApplyPage;
