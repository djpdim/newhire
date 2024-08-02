/** @format */

import React from "react";

const PrinterAccessSection = ({ formData, handleChange }) => {
    return (
        <>
            <h3>Printer & Scanner Access</h3>
            <label>
                Printer Access:
                <select name='printerAccess' value={formData.printerAccess.yes} onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label>

            {formData.printerAccess.yes === "Yes" && (
                <div>
                    <label>
                        <input
                            type='checkbox'
                            name='printerAccess-estPrintRoom'
                            checked={formData.printerAccess.estPrintRoom}
                            onChange={handleChange}
                        />
                        Est Ricoh Printer
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='printerAccess-thirdFloorPrintRoom'
                            checked={formData.printerAccess.thirdFloorPrintRoom}
                            onChange={handleChange}
                        />
                        3rd Floor Print Room
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='printerAccess-adminPrintRoom'
                            checked={formData.printerAccess.adminPrintRoom}
                            onChange={handleChange}
                        />
                        Admin Print Room
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='printerAccess-wideFormatPlotters'
                            checked={formData.printerAccess.wideFormatPlotters}
                            onChange={handleChange}
                        />
                        Wide Format Plotters
                    </label>
                    <label>
                        Other:
                        <input
                            type='text'
                            name='printerAccess-other'
                            value={formData.printerAccess.other}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}
            <label>
                Access to Office Scanners:
                <select name='scannerAccess' value={formData.scannerAccess} onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label>
        </>
    );
};

export default PrinterAccessSection;
