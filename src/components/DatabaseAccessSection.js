/** @format */

import React from "react";

const DatabaseAccessSection = ({ formData, handleChange, showDatabaseAccessOptions }) => {
    return (
        <>
            <h3>Database Access</h3>
            <label>
                Database Access:
                <select name='databaseAccess' value={formData.databaseAccess} onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label>
            {showDatabaseAccessOptions && (
                <div>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-addressBook'
                            checked={formData.moduleAccess.addressBook}
                            onChange={handleChange}
                        />
                        Address Book
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-buyouts'
                            checked={formData.moduleAccess.buyouts}
                            onChange={handleChange}
                        />
                        Buyouts
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-compliance'
                            checked={formData.moduleAccess.compliance}
                            onChange={handleChange}
                        />
                        Compliance
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-incidents'
                            checked={formData.moduleAccess.incidents}
                            onChange={handleChange}
                        />
                        Incidents
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-library'
                            checked={formData.moduleAccess.library}
                            onChange={handleChange}
                        />
                        Library
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-projectInfo'
                            checked={formData.moduleAccess.projectInfo}
                            onChange={handleChange}
                        />
                        Project Info
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-purchasing'
                            checked={formData.moduleAccess.purchasing}
                            onChange={handleChange}
                        />
                        Purchasing
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-reports'
                            checked={formData.moduleAccess.reports}
                            onChange={handleChange}
                        />
                        Reports
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-safety'
                            checked={formData.moduleAccess.safety}
                            onChange={handleChange}
                        />
                        Safety
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-subRequisitions'
                            checked={formData.moduleAccess.subRequisitions}
                            onChange={handleChange}
                        />
                        Sub Requisitions
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='moduleAccess-tasks'
                            checked={formData.moduleAccess.tasks}
                            onChange={handleChange}
                        />
                        Tasks
                    </label>
                </div>
            )}
        </>
    );
};

export default DatabaseAccessSection;
