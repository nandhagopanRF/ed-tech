import React, { useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import '../../css/Instructor/MyCourses.css';
import { FaStar, FaUser } from "react-icons/fa";

const MyCourses = () => {

    const {courses} = useContext(CourseContext);
    
    return (
        <div className="instructor-course-wrapper">
            <div className="instructor-course-container">
                {courses.map(course => (
                    <div key={course.id} className="instructor-course-card">
                        <img src={course.image} alt="JavaScript Course" className="instructor-course-image" />
                
                        <div className="instructor-course-body">
                            <h3 className="instructor-course-title">{course.title}</h3>
                
                            <div className="instructor-course-meta">
                                <span><FaUser className="instructor-user-icon"/> {Math.floor(Math.random() * 3000) + 100} Students</span>
                                <span><FaStar className="instructor-star-icon"/> {course.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCourses;
