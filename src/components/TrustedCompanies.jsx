import React from "react";
import '../css/TrustedCompanies.css'
import amazon from '../assets/images/trustedCompanies/amazon.png'
import google from '../assets/images/trustedCompanies/googl.png'
import apple from '../assets/images/trustedCompanies/app.png'
import netflix from '../assets/images/trustedCompanies/Netflix.png'
import reliance from '../assets/images/trustedCompanies/reliance.png'



const TrustedCompanies = () => {
    return (
        <>
            <div className="company-logos-wrapper">
                <div className="company-container">
                    <p className="company-logos-title">Trusted by leading companies</p>
                    <div className="company-logos">
                        <img src={amazon} alt="Company 1" />
                        <img src={google} alt="Company 2" />
                        <img src={apple} alt="Company 3" />
                        <img src={netflix} alt="Company 4" />
                        <img src={reliance} alt="Company 3" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default TrustedCompanies;