import React, { useState } from "react";
import "./styles/NameForm.css";
import InputForm from "./InputForm";
import CountrySelector from "./CountrySelector";
import WhatsApp from "./WhatsApp";
import ProfessionOptions from "./ProfessionOptions";
import GoalOptions from "./GoalOptions";
import CityOptions from "./CityOptions";
import Button from "./Button";

const NameForm = () => {
    const [countryCode, setCountryCode] = useState("IN");
    return (
        <div className="form-container">
            <div className="form-heading">
                <h4>FILL THE FORM BELOW TO ENQUIRE</h4>
            </div>
            <div className="form-inputs">
                
                    <InputForm label={`* Enter your name`} />
                    <WhatsApp />
                    <ProfessionOptions />
                    <GoalOptions />
                    <CityOptions />
                    <Button label={`Submit`} />
              
            </div>
        </div>
    );
};

export default NameForm;
