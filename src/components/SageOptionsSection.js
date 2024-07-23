/** @format */

import React from "react";

const SageOptionsSection = ({ formData, handleChange }) => {
    return (
        <>
            <h3>Sage Access Options</h3>
            <label>
                Sage 300 CRE
                <input
                    type='checkbox'
                    name='sageOptions'
                    value='Sage 300 CRE'
                    checked={formData.sageOptions.includes("Sage 300 CRE")}
                    onChange={handleChange}
                />
            </label>
            <label>
                Sage Estimating
                <input
                    type='checkbox'
                    name='sageOptions'
                    value='Sage Estimating'
                    checked={formData.sageOptions.includes("Sage Estimating")}
                    onChange={handleChange}
                />
            </label>
        </>
    );
};

export default SageOptionsSection;
