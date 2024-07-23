/** @format */

import React from "react";
import CompanyLogo from "../assets/megalg.svg"; // Adjust path if necessary

const Footer = () => {
    return (
        <div className='footer'>
            <img src={CompanyLogo} alt='Company Logo' className='logo' />
            <p>&copy; 2024 Mega Contracting Group. All rights reserved.</p>
        </div>
    );
};

export default Footer;
