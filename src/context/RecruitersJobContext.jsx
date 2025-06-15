import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const RecruitersJobContext = createContext(null);

export function RecruitersJobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('recruiterJobs')) || [];
    setJobs(savedJobs);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    localStorage.setItem('recruiterJobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
  const newJob = {
    id: Date.now(),
    title: job.position || "Untitled Role",         // 🔁 normalize
    company: job.company,
    location: job.location || "Not specified",      // 🔁 normalize
    type: job.type || "Full-Time",                  // 🔁 normalize
    salary: job.salary || "Not specified",          // ✅ already exists
    logo: "/default-logo.png"                       // 🖼️ optional fallback
  };
  setJobs(prev => [...prev, newJob]);
};

  const deleteJob = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  return (
    <RecruitersJobContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </RecruitersJobContext.Provider>
  );
}

export function useRecruitersJobContext() {
  const context = useContext(RecruitersJobContext);
  if (!context) {
    throw new Error("useRecruitersJobContext must be used inside a RecruitersJobProvider");
  }
  return context;
}
