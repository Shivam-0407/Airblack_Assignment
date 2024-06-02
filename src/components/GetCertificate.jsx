import React from "react";
import certificate from "../images/certificate_image.png";
import "./styles/GetCertificate.css";

const GetCertificate = () => {
    return (
        <div className="get-certificate-container">
            <div className="certifacte-heading">
                <div className="border-heading">
                    <div className="border">
                        <div className="actual-border"></div>
                    </div>
                    <h2>Get Certificate From India's Biggest Beauty Platform</h2>
                    <div className="border">
                        <div className="actual-border"></div>
                    </div>
                </div>

                <div className="certificate-image-container">
                    <img src={certificate} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GetCertificate;
