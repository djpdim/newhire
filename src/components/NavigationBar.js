/** @format */

import React from "react";
import CompanyLogo from "../assets/megalg.svg"; // Adjust path if necessary

const NavigationBar = () => {
    return (
        <div className='App-header'>
            <img src={CompanyLogo} alt='Company Logo' className='logo' />
            <h1>New Hire IT Checklist Form</h1>
        </div>
    );
};

export default NavigationBar;
