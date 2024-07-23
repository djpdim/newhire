/** @format */

import React from "react";

const SoftwareOptions = ({ formData, handleChange, showDatabaseAccessOptions }) => (
    <>
        <label>
            Is BlueBeam needed?
            <select name='blueBeamNeeded' value={formData.blueBeamNeeded} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>

        <label>
            Sage:
            <select name='sageNeeded' value={formData.sageNeeded} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>

        {formData.sageNeeded === "Yes" && (
            <div>
                <label>
                    <input
                        type='checkbox'
                        name='sageOption-projectManagement'
                        checked={formData.sageOptions.projectManagement}
                        onChange={handleChange}
                    />
                    Project Management
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='sageOption-accounting'
                        checked={formData.sageOptions.accounting}
                        onChange={handleChange}
                    />
                    Accounting
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='sageOption-estimating'
                        checked={formData.sageOptions.estimating}
                        onChange={handleChange}
                    />
                    Estimating
                </label>
            </div>
        )}

        <label>
            Access to AutoCAD?
            <select name='autoCADAccess' value={formData.autoCADAccess} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>

        <label>
            Access to Primavera P6?
            <select name='primaveraAccess' value={formData.primaveraAccess} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>

        <label>
            Planswift:
            <select name='planswiftAccess' value={formData.planswiftAccess} onChange={handleChange}>
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </select>
        </label>

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

export default SoftwareOptions;
