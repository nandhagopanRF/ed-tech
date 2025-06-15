import React from "react";
import '../css/Testimonials.css'

const testimonials = [
    {
      name: "Ananya Sharma",
      review:
        "This platform helped me crack my dream job. The courses are well-structured and the projects are hands-on!",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Rahul Verma",
      review:
        "Great mentors, amazing support, and up-to-date content. Highly recommended!",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Priya Singh",
      review:
        "The UI/UX design course was incredible. I feel more confident applying for internships now.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Amit Mehra",
      review:
        "The hands-on projects and feedback from mentors made a real difference in my learning experience.",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
        name: "Sneha Kapoor",
        review:
          "The React course made everything click for me. I built my first portfolio website within a week!",
        avatar: "https://i.pravatar.cc/100?img=5",
      },
      {
        name: "Karan Joshi",
        review:
          "From beginner to job-ready—this platform truly delivers. The support team is also super helpful!",
        avatar: "https://i.pravatar.cc/100?img=6",
      },
  ];
  
  const Testimonials = () => {
    return (
      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Student Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <p className="testimonial-review">"{t.review}"</p>
                <h4 className="testimonial-name">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;