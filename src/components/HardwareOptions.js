/** @format */

import React from "react";

const HardwareOptions = ({ formData, handleChange }) => (
    <>
        {/* <label>
            Computer Configuration:
            <select name='computerConfiguration' value={formData.computerConfiguration} onChange={handleChange}>
                <option value=''>Select Option</option>
                <option value='Desktop'>Desktop</option>
                <option value='Laptop'>Laptop</option>
            </select>
        </label> */}

        <label>
            Computer Monitors:
            <select name='monitors' value={formData.monitors} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>
    </>
);

export default HardwareOptions;
