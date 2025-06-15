import React from "react";
import '../css/CourseSlider.css'
import { useNavigate } from 'react-router-dom';
import web from '../assets/images/courseSlider/web.png'
import react from '../assets/images/courseSlider/react.png'
import js from '../assets/images/courseSlider/js.png'
import py from '../assets/images/courseSlider/py.png'
import and from '../assets/images/courseSlider/and.png'
import ui from '../assets/images/courseSlider/ui.png'

import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from "swiper/modules";
import { CourseContext } from '../context/CourseContext';


const CourseSlider = () => {
   const { courses } = useContext(CourseContext);

    //const courses = [
    //    {
    //      title: "Web Development",
    //      instructor: "Colt Steele",
    //      duration: "3 months",
    //      image: web,  
    //    },
    //    {
    //      title: "React for Beginners",
    //      instructor: "Mosh Hamedani",
    //      duration: "2 months",
    //      image: react, 
    //    },
    //    {
    //      title: "Mastering JavaScript",
    //      instructor: "Max Schwarzmüller",
    //      duration: "1.5 months",
    //      image: js,
    //    },
    //    {
    //      title: "Python for Data Science",
    //      instructor: "Jose Portilla",
    //      duration: "4 months",
    //      image: py,
    //    },
    //    {
    //      title: "Android Development",
    //      instructor: "Brad Traversy",
    //      duration: "6 months",
    //      image: and,
    //    },
    //    {
    //      title: "UI/UX Design",
    //      instructor: "Daniel Walter Scott",
    //      duration: "2 months",
    //      image: ui,
    //    },
    //];
      const navigate = useNavigate();
      
        const handleClick = () => {
          navigate('/courses');
        };
            

    return (
        <>
            <div className="courseslider-wrapper">
                <div className="courseslider-container">
                <h2 className="courseslider-title">Popular Courses</h2>
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

                        {courses.map((course, index) => (
                            <SwiperSlide key={index}>
                            <div className="course-card">
                                <img src={course.image} alt={course.title} className="course-logo" />
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-instructor">instructor</p>
                                <p className="course-duration">1 month</p>
                                <button className="course-btn">View</button>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>

                </div>
                <button className="courseslider-btn" onClick={handleClick}>View all Courses</button>
            </div>
        </>
    )

}

export default CourseSlider;