import React from "react";
import Button from "./Button";
import insta from "../images/Instagram_logo.png";
import fb from "../images/facebook_logo.png";
import linkedIn from "../images/linkedIn_logo.png";
import twitter from '../images/twitter_logo.png';

import './styles/Footer.css'


const Footer = () => {
    return (
        <div className="footer-background-container">
            <h3>Join our growing community of 35,000+alumni</h3>
            <Button label={`Apply Now`} />
            <div className="company-tags">
                <div className="insta-container">
                    <img src={insta} alt="" />
                </div>
                <div className="fb-container">
                    <img src={fb} alt="" />
                </div>
                <div className="linkedIn-container">
                    <img src={linkedIn} alt="" />
                </div>
                <div className="twitter-container">
<img src={twitter} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
