
import "../css/Filters.css";

// components/Filter.js
import React from "react";

const Filter = ({ filters, handleChange }) => {
  const filterOptions = [
    { label: "Location", name: "location", options: ["Hyderabad", "Mumbai", "Pune","Remote","Noida"] },
    { label: "Job Type", name: "type", options: ["Full-Time", "Remote","Internship"] },
   // { label: "Experience", name: "experience", options: ["0-1", "0-2", "2-4"] },
    { label: "Salary", name: "salary", options: ["₹6 - ₹8 LPA", "₹8 - ₹12 LPA", "₹5 - ₹7 LPA","15000/month"] }
  ];

  return (
    <div className="sidebar">
      <h3>Filter Jobs</h3>
      {filterOptions.map(f => (
        <div key={f.name}>
          <h4>{f.label}</h4>
          {f.options.map(opt => (
            <label key={opt}>
              <input
                type="checkbox"
                name={f.name}
                value={opt}
                onChange={handleChange}
                checked={filters[f.name].includes(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
