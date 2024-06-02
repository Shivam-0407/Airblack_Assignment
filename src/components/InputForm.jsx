import React from "react";
import "./styles/InputForm.css";

const InputForm = ({ label }) => {
    return (
        <div className="input-container">
            {label}
            <input placeholder="Eg. Aneesha Mehra"></input>
        </div>
    );
};

export default InputForm;
