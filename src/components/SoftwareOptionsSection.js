/** @format */

import React from "react";

const SoftwareOptionsSection = ({ formData, handleChange }) => {
    return (
        <>
            <h3>Software Options</h3>

            <label>
                PDF Editor:
                <select name='pdfNeeded' value={formData.pdfNeeded} onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label>

            {formData.pdfNeeded === "Yes" && (
                <div>
                    <label>
                        <input
                            type='checkbox'
                            name='pdfOptions-adobePDF'
                            checked={formData.pdfOptions.adobePDF}
                            onChange={handleChange}
                        />
                        Adobe DC Pro
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='pdfOptions-litePDF'
                            checked={formData.pdfOptions.litePDF}
                            onChange={handleChange}
                        />
                        Adobe PDF Viewer
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='pdfOptions-nitroPDF'
                            checked={formData.pdfOptions.nitroPDF}
                            onChange={handleChange}
                        />
                        Nitro PDF
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='pdfOptions-bluePDF'
                            checked={formData.pdfOptions.bluePDF}
                            onChange={handleChange}
                        />
                        BlueBeam
                    </label>
                </div>
            )}

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
                            name='sageOptions-projectManagement'
                            checked={formData.sageOptions.projectManagement}
                            onChange={handleChange}
                        />
                        Project Management
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='sageOptions-accounting'
                            checked={formData.sageOptions.accounting}
                            onChange={handleChange}
                        />
                        Accounting
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='sageOptions-estimating'
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
        </>
    );
};

export default SoftwareOptionsSection;
