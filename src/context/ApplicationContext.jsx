import React, { createContext, useContext, useState, useEffect } from "react";

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("applications");
    if (stored) setApplications(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  const addApplication = (application) => {
    const newApp = {
      ...application,
      status: "Application Received", // Default initial status
    };
    setApplications(prev => [...prev, newApp]);
  };

  const updateApplicationStatus = (studentId, jobId, newStatus) => {
    setApplications(prev =>
      prev.map(app =>
        app.studentId === studentId && app.jobId === jobId
          ? { ...app, status: newStatus }
          : app
      )
    );
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication, updateApplicationStatus }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
