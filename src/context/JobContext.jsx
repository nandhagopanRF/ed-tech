import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const JobContext = createContext();

const staticJobs = [
  {
    id: "static-1",
    title: "Software Developer",
    company: "Amazon",
    location: "Hyderabad",
    logo: "/src/assets/images/jobSlider/amazon.png",
    type: "Full-Time",
    salary: "₹6 - ₹8 LPA",
    isStatic: true
  },
  {
    id: "static-2",
    title: "Junior Web Developer",
    company: "Jio",
    location: "Mumbai",
    logo: "/src/assets/images/jobSlider/jio.png",
    type: "Remote",
    salary: "₹8 - ₹12 LPA",
    isStatic: true
  }
];

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation(); // ✅ detect route change

  const loadJobsFromStorage = () => {
    const stored = localStorage.getItem("recruiterJobs");
    console.log("Raw recruiterJobs in localStorage:", stored);

    let recruiterJobs = [];
    try {
      recruiterJobs = JSON.parse(stored) || [];
    } catch (e) {
      console.error("Failed to parse recruiterJobs:", e);
    }

    const cleanedJobs = recruiterJobs.map(job => ({
      id: job.id,
      title: job.title || job.position || "Untitled",
      company: job.company || "Unknown",
      location: job.location || "Anywhere",
      type: job.type || "Full-Time",
      salary: job.salary || "Negotiable",
      logo: job.logo || "/default-logo.png",
      description: job.description || "No description provided.",
      isStatic: false
    }));

    const mergedJobs = [...staticJobs, ...cleanedJobs];
    setJobs(mergedJobs);
  };

  // ✅ Reload on route change
  useEffect(() => {
    loadJobsFromStorage();
  }, [location]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
