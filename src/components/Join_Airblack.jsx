import React from "react";
import zoom from "../images/video_logo.png";
import "./styles/Join_Airblack.css";
import star from "../images/ratings_logo.png";
import members_logo from "../images/members_logo.png";
import Button from "./Button";

const Join_Airblack = () => {
    return (
        <div className="background-container">
            <div className="text-overlay">
                <h1>Why Should You Join Airblack?</h1>

                <div className="features-container">
                    <div className="zoom-container">
                        <div className="zoom-img-container">
                            <img src={zoom} alt="" />
                        </div>
                        <p>Do-it-together, live on zoom</p>
                    </div>
                    <div className="ratings-container">
                        <div className="ratings-img-container">
                            <img src={star} alt="" />
                        </div>
                        <p>4.85 Rated Classes</p>
                    </div>
                    <div className="members-container">
                        <div className="zoom-img-container">
                            <img src={members_logo} alt="" />
                        </div>
                        <p>35000+ Members</p>
                    </div>
                </div>
                <Button label={`Apply Now`} />
            </div>
        </div>
    );
};

export default Join_Airblack;
