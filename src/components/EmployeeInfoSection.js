/** @format */

import React from "react";

const EmployeeInfoSection = ({ formData, handleChange, missingFields }) => {
    const inputStyle = fieldName => ({
        borderColor: missingFields.includes(fieldName) ? "red" : "",
    });

    const requiredAsterisk = <span className='required-asterisk'>*</span>;

    return (
        <div>
            <h3>Employee Information</h3>
            <label>
                Employee Name:{requiredAsterisk}
                <input
                    type='text'
                    name='employeeName'
                    value={formData.employeeName}
                    onChange={handleChange}
                    style={inputStyle("employeeName")}
                />
            </label>
            <label>
                Department:{requiredAsterisk}
                <select
                    name='department'
                    value={formData.department}
                    onChange={handleChange}
                    style={inputStyle("department")}
                >
                    <option value=''>Select Department</option>
                    <option value='Accounting'>Accounting</option>
                    <option value='Admninistration'>Admninistration</option>
                    <option value='Buyouts'>Buyouts</option>
                    <option value='Estimating'>Estimating</option>
                    <option value='Human Resources'>Human Resources</option>
                    <option value='Operations Field'>Operations Field</option>
                    <option value='Operations Office'>Operations Office</option>
                </select>
            </label>
            <label>
                Title:{requiredAsterisk}
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    style={inputStyle("title")}
                />
            </label>
            <label>
                Supervisor:{requiredAsterisk}
                <input
                    type='text'
                    name='supervisor'
                    value={formData.supervisor}
                    onChange={handleChange}
                    style={inputStyle("supervisor")}
                />
            </label>
            {/* Add other fields as necessary */}
        </div>
    );
};

export default EmployeeInfoSection;
