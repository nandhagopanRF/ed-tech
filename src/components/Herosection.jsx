import React from "react";
import person from '../assets/images/hero/person.png'
import '../css/Herosection.css'

const Herosection = () => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-container">
                    <div className="hero-left">
                        <h1 className="hero-title">Explore Over <span className="highlight">7,000+</span> Job Opportunities</h1>
                        <p className="hero-content">Discover a platform tailored for passionate job seekers interested in startups. Find your next career opportunity and connect with like-minded individuals. </p>
                    
                        <div className="search-container">
                            <input className="hero-input" 
                            type="text" 
                            placeholder="Search..." />
                            <button className="search-btn">Search</button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img className="hero-img
                        " src={person} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Herosection;