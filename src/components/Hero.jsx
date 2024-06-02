import React from "react";
import certificate from "../images/certificate_logo.png";
import "./styles/Hero.css";
import star from "../images/star_logo.png";
import { points } from "../constants/points";
import tick from "../images/tick_mark_logo.png";
import NameForm from "./NameForm";

const Hero = ({ label }) => {
    return (
        <div className="hero-container">
            <h1>{label}</h1>
            <div className="certificate-ratings-container">
                <div className="certificate-container">
                    <div className="certificate-img-container">
                        <img className="certifcate-img" src={certificate} alt="" />
                    </div>
                    <p className="certificate-prog">Certificate</p>
                    <p className="certificate-prog">Programme</p>
                </div>
                <div className="star-rating">
                    <div className="star-logo-container">
                        <img src={star} alt="" />
                    </div>
                    <p>Rating 4.85/5</p>
                </div>
            </div>
            <div className="points-container">
                {points.map((point) => {
                    return (
                        <div className="key-points">
                            <div className="tick-img-container">
                                <img src={tick}></img>
                            </div>

                            <p>{point}</p>
                        </div>
                    );
                })}
            </div>
            <NameForm />
        </div>
    );
};

export default Hero;
