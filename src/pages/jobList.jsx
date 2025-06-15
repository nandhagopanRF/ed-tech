
import "../css/joblist.css";
// App.js
import React, { useState, useContext } from "react";
 import { useJobContext } from "../context/JobContext.jsx"
import Filter from "../components/Filters.jsx"
import JobCard from "../components/JobCard.jsx";
const JobList = () => {
  const { jobs } = useJobContext()

  const [filters, setFilters] = useState({
    location: [],
    type: [],
    experience: [],
    salary: []
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter(v => v !== value)
    }));
  };

    const filteredJobs = jobs;
 // const filteredJobs = jobs.filter(job =>
 //   (filters.location.length === 0 || filters.location.includes(job.location)) &&
 //   (filters.type.length === 0 || filters.type.includes(job.type)) &&
 //   //(filters.experience.length === 0 || filters.experience.includes(job.experience)) &&
 //   (filters.salary.length === 0 || filters.salary.includes(job.salary))
 // );
  console.log("Jobs from context:", jobs);

  return (
    <div className="layout">
      <div className="content">
        <h2 className="section-title">Latest Job Openings</h2>
        {filteredJobs.map((j, i) => (
          <JobCard key={i} job={j} />
        ))}
      </div>
      

    </div>
  );
};

export default JobList;
//<Filter filters={filters} handleChange={handleChange} />
