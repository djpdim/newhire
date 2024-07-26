/** @format */

import React from "react";

const OtherAccessSection = ({ formData, handleChange }) => {
    const handleInputChange = event => {
        const { name, value } = event.target;
        const formattedValue = value.replace(/(?:^|\. )\w/g, char => char.toUpperCase());
        handleChange({ target: { name, value: formattedValue } });
    };

    return (
        <>
            <h3>Other Access Requirements</h3>
            <label>
                Other Access Needed:
                <textarea name='otherAccess' value={formData.otherAccess} onChange={handleInputChange} />
            </label>
        </>
    );
};

export default OtherAccessSection;
