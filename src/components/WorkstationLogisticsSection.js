/** @format */

import React from "react";

const WorkstationLogisticsSection = ({ formData, handleChange }) => {
    return (
        <>
            <h3>Workstation Logistics</h3>
            <label>
                Office
                <input
                    type='radio'
                    name='workstationLogistics'
                    value='Office'
                    checked={formData.workstationLogistics === "Office"}
                    onChange={handleChange}
                />
            </label>
            {formData.workstationLogistics === "Office" && (
                <div>
                    <label>
                        Computer Configuration:
                        <select
                            name='computerConfiguration'
                            value={formData.computerConfiguration}
                            onChange={handleChange}
                        >
                            <option value=''>Select Option</option>
                            <option value='Desktop'>Desktop</option>
                            <option value='Laptop'>Laptop</option>
                        </select>
                    </label>
                </div>
            )}
            <label>
                Jobsite
                <input
                    type='radio'
                    name='workstationLogistics'
                    value='Jobsite'
                    checked={formData.workstationLogistics === "Jobsite"}
                    onChange={handleChange}
                />
                {formData.workstationLogistics === "Jobsite" && (
                    <input
                        type='text'
                        name='jobSite'
                        placeholder='Enter Job Site'
                        value={formData.jobSite}
                        onChange={handleChange}
                    />
                )}
            </label>
        </>
    );
};

export default WorkstationLogisticsSection;
