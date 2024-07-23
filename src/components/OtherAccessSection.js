/** @format */

import React from "react";

const OtherAccessSection = ({ formData, handleChange }) => {
    return (
        <>
            <h3>Other Access Requirements</h3>
            <label>
                Other Access Needed:
                <textarea name='otherAccess' value={formData.otherAccess} onChange={handleChange} />
            </label>
        </>
    );
};

export default OtherAccessSection;
