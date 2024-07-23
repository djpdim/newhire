/** @format */

import React from "react";

const PrinterAccess = ({ formData, handleChange }) => (
    <>
        <label>
            Printer Access:
            <select name='printerAccess' value={formData.printerAccess.yes ? "Yes" : "No"} onChange={handleChange}>
                <option value='No'>No</option>
                <option value='Yes'>Yes</option>
            </select>
        </label>

        {formData.printerAccess.yes && (
            <div>
                <label>
                    <input
                        type='checkbox'
                        name='printerAccess-estPrintRoom'
                        checked={formData.printerAccess.estPrintRoom}
                        onChange={handleChange}
                    />
                    Est Print Room
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
    </>
);

export default PrinterAccess;
