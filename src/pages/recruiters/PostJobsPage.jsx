import React, { useState } from 'react';
import { useRecruitersJobContext } from '../../context/RecruitersJobContext';
import '../../css/recruiters/PostJobPage.css';

const PostJobPage = () => {
  const [form, setForm] = useState({
    company: '',
    position: '',
    salary: '',
    experience: '',
    location: '',
    type: '',
    description: ''
  });

  const [showPreview, setShowPreview] = useState(false);
  const { addJob } = useRecruitersJobContext();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Company name: limit to 15 characters
    if (name === 'company' && value.length > 15) return;
    if (name === 'description' && value.length > 50) return;


    // Experience: only allow numbers
    if (name === 'experience' && value !== '' && !/^\d*$/.test(value)) return;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    alert('Job submitted!');
    setForm({
      company: '',
      position: '',
      salary: '',
      experience: '',
      location: '',
      type: '',
      description: ''
    });
    setShowPreview(false);
  };

  return (
    <div className="post-job-wrapper">
      <div className="post-form-section">
        <h2 className="post-h2">Post a Job</h2>
        <form className="post-job-form" onSubmit={handleSubmit}>
          <label className="post-label">Company (max 15 chars)</label>
          <input
            className="post-input"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
          />

          <label className="post-label">Position</label>
          <input
            className="post-input"
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
          />

          <label className="post-label">Salary</label>
          <input
            className="post-input"
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />

          <label className="post-label">Experience Required (years)</label>
          <input
            className="post-input"
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
          />

          <label className="post-label">Location</label>
          <input
            className="post-input"
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
          />

          <label className="post-label">Job Type</label>
          <select
            className="post-input"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Select job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
           <label className="post-label">Job Description(max 50 chars)</label>
          <textarea className="post-input" name="description" value={form.description} onChange={handleChange} required />

          <label className="post-label">Upload Employer Logo</label>
          <input type="file" name="logo" accept="image/*" onChange={handleChange} disabled />

          <div className="post-button-group">
            <div className="post-left-buttons">
              <button className="post-button" type="submit">Post Job</button>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="post-preview-btn"
              >
                {showPreview ? 'Hide Preview' : 'Preview Job Post'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {showPreview && (
        <div className="post-preview-section">
          <h3 className="post-h3">Job Preview</h3>
          <p><strong>Company:</strong> {form.company}</p>
          <p><strong>Position:</strong> {form.position}</p>
          <p><strong>Salary:</strong> {form.salary}</p>
          <p><strong>Experience Required:</strong> {form.experience}</p>
          <p><strong>Location:</strong> {form.location}</p>
          <p><strong>Job Type:</strong> {form.type}</p>
          <p><strong>Description:</strong> {form.description}</p>
          
        </div>
      )}
    </div>
  );
};

export default PostJobPage;
