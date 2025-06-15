import React from "react";
import '../css/JobSlider.css'
import { useNavigate } from 'react-router-dom';
//import amazonLogo from '../assets/images/jobSlider/amazon.png'
//import jioLogo from '../assets/images/jobSlider/jio.png'
//import cognizantLogo from '../assets/images/jobSlider/cognizant.png'
//import coforgeLogo from '../assets/images/jobSlider/coforge.png'
//import breadLogo from '../assets/images/jobSlider/bread.png'
//import capgeminiLogo from '../assets/images/jobSlider/capgemini.png'
import { useJobContext } from "../context/JobContext";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from "swiper/modules";


const JobSlider = () => {

    const { jobs } = useJobContext();
    //const jobs = [
    //    {
    //      title: "Software Developer",
    //      company: "Amazon",
    //      location: "Hyderabad, India",
    //      logo: amazonLogo, 
    //    },
    //    {
    //      title: "Junior Web Developer",
    //      company: "Jio",
    //      location: "Mumbai, India",
    //      logo: jioLogo,
    //    },
    //    {
    //      title: "Data Analyst",
    //      company: "Cognizant",
    //      location: "Pune, India",
    //      logo: cognizantLogo,
    //    },
    //    {
    //      title: "Frontend Engineer Intern",
    //      company: "Bread Financial",
    //      location: "Remote",
    //      logo: breadLogo,
    //    },
    //    {
    //      title: "Backend Developer",
    //      company: "Coforge",
    //      location: "Noida, India",
    //      logo: coforgeLogo,
    //    },
    //    
    //  ];
     const navigate = useNavigate();

  const handleClick = () => {
    navigate('/jobs');
  };
      

    return (
        <>
            <div className="jobslider-wrapper">
                <div className="jobslider-container">
                <h2 className="jobslider-title">Featured Jobs</h2>
                    <Swiper 
                        modules={[Navigation,Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={true}
                        navigation={true}
                        breakpoints={{
                            320: { slidesPerView: 1 }, 
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}>

                        {jobs.map((job, index) => (
                            <SwiperSlide key={index}>
                            <div className="job-card">
                                <img src={job.logo} alt={job.company} className="job-logo" />
                                <h3 className="job-title">{job.title}</h3>
                                <p className="job-company">{job.company}</p>
                                <p className="job-location">{job.location}</p>
                                <button className="job-btn">View</button>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>

                </div>
                 <button className="jobslider-btn" onClick={handleClick}>
      View all Jobs
    </button>
            </div>
        </>
    )
}

export default JobSlider;