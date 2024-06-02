import React from "react";
import CountrySelector from "./CountrySelector";
import "./styles/WhatsApp.css";

const WhatsApp = () => {
    return (
        <>
            <p>Enter your WhatsApp Number</p>
            <div className="whatsapp">
                <CountrySelector />
                <input type="text" placeholder="Eg. 00000000" />
            </div>
        </>
    );
};

export default WhatsApp;
