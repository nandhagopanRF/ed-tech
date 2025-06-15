import React from 'react'
import './App.css'
//import Login from './pages/Login'
//import Navbar from './components/Navbar'
//import Herosection from './components/Herosection'
//import TrustedCompanies from './components/TrustedCompanies'
//import JobSlider from './components/JobSlider'
//import CourseSlider from './components/CourseSlider'
//import Testimonials from './components/Testimonials'
//import Footer from './components/Footer'
//import ScrollToTop from './components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Navbar from './components/Navbar'; // assuming this is the correct path
import Landing from './pages/Landing';
import JobList from './pages/jobList'; 
import Login from './pages/Login';
import MainPage from './pages/LandingPage';
import { JobProvider } from "./context/JobContext";
import { CourseProvider } from './context/CourseContext';
import { RecruitersJobProvider } from './context/RecruitersJobContext';
import PostJobPage from './pages/recruiters/PostJobsPage';
import RecruiterJobsPage from './pages/recruiters/RecruiterJobsPage';
import ApplicantReviewPage from './pages/recruiters/ApplicantReviewPage';
import PrivateRoute from './components/PrivateRoute';
import RecruiterLayout from "./layouts/RecruiterLayout";
import ApplyPage from './pages/ApplyPage';
import { ApplicationProvider } from './context/ApplicationContext';
import { PostProvider } from './context/PostContext';
import RecruiterFeedPage from './pages/recruiters/RecruiterFeedPage';
import JobApplications from './components/recruiter/JobApplication';
import MyCourses from './components/instructor/MyCourses';
import Chat from './pages/Chat';
import JobDetail from './pages/JobDetail';



const App = () => {
  return (
    <Router>
    <JobProvider>
      <CourseProvider>
        <RecruitersJobProvider>
          <ApplicationProvider>
            <PostProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<JobList/>} />
        <Route path="/account" element={<Login/>} />
         <Route path="/chat/:name" element={<Chat/>} />
        <Route path="/apply/:jobId" element={
            <PrivateRoute allowedRole="student">
              <ApplyPage />
            </PrivateRoute>
          } />
          <Route path="/jobdetail/:jobId" element={
            <PrivateRoute allowedRole="student">
              <JobDetail />
            </PrivateRoute>
          } />
        <Route path="/feed" element={
                    <PrivateRoute allowedRole="student">
                        <MainPage />
                        
                    </PrivateRoute>
                } />
                 <Route path="/instructor" element={
                    <PrivateRoute allowedRole="instructor">
                        <MyCourses />
                        
                    </PrivateRoute>
                } />
                 <Route path="/recruiter/*" element={
                <PrivateRoute allowedRole="recruiter">
                    <RecruiterLayout />
                </PrivateRoute>
            }>
              <Route path="applicant-review/:jobId/:studentId" element={<ApplicantReviewPage />} />
                <Route path="jobs" element={<RecruiterJobsPage />} />
                <Route path="job-applications/:jobId" element={<JobApplications/>} />
                <Route path="post-jobs" element={<PostJobPage />} />
                <Route path="feed" element={<RecruiterFeedPage />} />
       </Route>
      </Routes>
      </PostProvider>
      </ApplicationProvider>
    </RecruitersJobProvider>
    </CourseProvider>
    </JobProvider>
    </Router>
  );
};
//<Route path="/recruiter/post-jobs" element={<PostJobPage/>} />
        //<Route path="/recruiter/jobs" element={<RecruiterJ//obsPage/>} />
        //<Route path="/recruiter/Applicantpage" element={<ApplicantReviewPage/>} />
        //<Route path="/applicantslist" element={<JobApplications/>} />
export default App;
