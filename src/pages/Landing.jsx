import React from "react";
//import Login from '/Login'
//import Navbar from './components/Navbar'
import Herosection from '../components/Herosection'
import TrustedCompanies from '../components/TrustedCompanies'
import JobSlider from '../components/JobSlider'
import CourseSlider from '../components/CourseSlider'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Landing = () => {
    return (
        <>
         
      <Herosection></Herosection>
      <TrustedCompanies></TrustedCompanies>
      <JobSlider></JobSlider>
      <CourseSlider></CourseSlider>
      <Testimonials></Testimonials>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
        </>
    )
}

export default Landing;
