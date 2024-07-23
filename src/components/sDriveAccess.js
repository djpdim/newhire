/** @format */

import React from "react";

const SDriveAccess = ({ formData, handleChange }) => (
    <div>
        <h3>S-Drive Access</h3>
        <label>
            Access to Folders in S:/ drive:
            <select name='sDriveAccess' value={formData.sDriveAccess} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>
        {/* Conditional rendering for S drive location input field */}
        {formData.sDriveAccess === "Yes" && (
            <label>
                S Drive Location:
                <input type='text' name='sDriveLocation' value={formData.sDriveLocation} onChange={handleChange} />
            </label>
        )}
    </div>
);

export default SDriveAccess;
