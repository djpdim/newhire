/** @format */

import emailjs from "emailjs-com";
import React, { useState } from "react";
import CompanyLogo from "../assets/megalg.svg"; // Import the company logo image

const NavigationBar = () => {
    return (
        <div className='App-header'>
            <img src={CompanyLogo} alt='Company Logo' className='logo' />
            <h1>New Hire IT Checklist Form</h1>
        </div>
    );
};

const Footer = () => {
    return (
        <div className='footer'>
            <img src={CompanyLogo} alt='Company Logo' className='logo' />
            <p>&copy; 2024 Mega Contracting Group. All rights reserved.</p>
        </div>
    );
};
const NewHireForm = () => {
    const [formData, setFormData] = useState({
        employeeName: "",
        department: "",
        title: "",
        supervisor: "",
        workstationLogistics: "",
        computerConfiguration: "",
        monitors: "",
        scannerAccess: "",
        blueBeamNeeded: "",
        sageNeeded: "",
        sageOptions: {
            projectManagement: false,
            accounting: false,
            estimating: false,
        },
        sDriveAccess: "",
        sDriveLocation: "",
        autoCADAccess: "",
        primaveraAccess: "",
        planswiftAccess: "",
        databaseAccess: "",
        moduleAccess: {
            addressBook: false,
            projectInfo: false,
            laborMonitor: false,
            reportBuyouts: false,
            compliance: false,
            incidents: false,
            tasks: false,
            reports: false,
            subreq: false,
            library: false,
            safety: false,
            purchasing: false,
        },
        printerAccess: {
            yes: false,
            estPrintRoom: false,
            thirdFloorPrintRoom: false,
            adminPrintRoom: false,
            other: "",
        },
        comments: "",
    });
    const [showDatabaseAccessOptions, setShowDatabaseAccessOptions] = useState(false); // State variable to manage visibility of database access options
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showForm, setShowForm] = useState(true);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        if (name === "printerAccess") {
            // Handle printer access selection
            const newValue = value === "Yes";
            setFormData(prevState => ({
                ...prevState,
                printerAccess: {
                    ...prevState.printerAccess,
                    yes: newValue,
                    other: newValue ? "" : prevState.printerAccess.other, // Clear other if selecting No
                    estPrintRoom: false, // Reset all printer room options when changing printer access
                    thirdFloorPrintRoom: false,
                    adminPrintRoom: false,
                },
            }));
        } else if (name === "printerAccess-other") {
            // Handle other printer access input
            setFormData(prevState => ({
                ...prevState,
                printerAccess: {
                    ...prevState.printerAccess,
                    other: value,
                },
            }));
        } else if (name.startsWith("printerAccess")) {
            // Handle printer access checkboxes
            const optionName = name.split("-")[1];
            setFormData(prevState => ({
                ...prevState,
                printerAccess: {
                    ...prevState.printerAccess,
                    [optionName]: checked,
                },
            }));
        } else if (name === "databaseAccess") {
            // Handle database access
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
            // Toggle visibility of database access options
            if (value === "Yes") {
                setShowDatabaseAccessOptions(true);
            } else {
                setShowDatabaseAccessOptions(false);
            }
        } else if (name.startsWith("sageOption")) {
            // Handle Sage options checkboxes
            const optionName = name.split("-")[1];
            setFormData(prevState => ({
                ...prevState,
                sageOptions: {
                    ...prevState.sageOptions,
                    [optionName]: checked,
                },
            }));
        } else if (name.startsWith("moduleAccess")) {
            // Handle database access options checkboxes
            const optionName = name.split("-")[1];
            setFormData(prevState => ({
                ...prevState,
                moduleAccess: {
                    ...prevState.moduleAccess,
                    [optionName]: checked,
                },
            }));
        } else {
            // Handle other form fields
            setFormData(prevState => ({
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        // // Perform client-side validation
        // if (!validateForm()) {
        //     setErrorMessage("Please fill out all required fields.");
        //     return;
        // }

        // Prepare the email parameters
        const message = `
            Employee Name: ${formData.employeeName}
            Department: ${formData.department}
            Title: ${formData.title}
            Supervisor Name: ${formData.supervisor}
            Workstation Logistics: ${formData.workstationLogistics}

            Hardware Options
            -----------------
            Computer Configuration: ${formData.computerConfiguration}
            Monitors: ${formData.monitors}

            Printer & Scanner Access
            -----------------
            Printer Access: ${formData.printerAccess.yes ? "Yes" : "No"}
            ${
                formData.printerAccess.yes && // Only display printer options if printer access is Yes
                `
                    ${formData.printerAccess.estPrintRoom && "Est Print Room"}
                    ${formData.printerAccess.thirdFloorPrintRoom && "3rd Floor Print Room"}
                    ${formData.printerAccess.adminPrintRoom && "Admin Print Room"}
                    ${formData.printerAccess.other && `Other: ${formData.printerAccess.other}`}
                `
            }
            Scanner Access: ${formData.scannerAccess}

            Software Options
            -----------------
            Database Access: ${formData.databaseAccess}
            Database Access Options: ${Object.keys(formData.moduleAccess)
                .filter(key => formData.moduleAccess[key])
                .map(key => {
                    // Split camelCase module name into separate words
                    const words = key.split(/(?=[A-Z])/);
                    // Capitalize each word and join with space
                    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                })
                .join(", ")}
            Sage Needed: ${formData.sageNeeded}
            Sage Options: ${Object.keys(formData.sageOptions)
                .filter(key => formData.sageOptions[key])
                .map(key => {
                    // Split camelCase module name into separate words
                    const words = key.split(/(?=[A-Z])/);
                    // Capitalize each word and join with space
                    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                })
                .join(", ")}
            BlueBeam Needed: ${formData.blueBeamNeeded}
            S Drive Access: ${formData.sDriveAccess}
            S Drive Location: ${formData.sDriveLocation}
            AutoCAD Access: ${formData.autoCADAccess}
            Primavera Access: ${formData.primaveraAccess}
            Planswift Access: ${formData.planswiftAccess}
            `;

        // Send the email using EmailJS
        const emailParams = {
            employee: "IT Checklist for the New Hire",
            message: message,
            from_name: formData.employeeName, // You can use any field here, e.g., formData.from_name
        };

        // Send the email using EmailJS
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(result => {
                console.log(result.text);
                setErrorMessage("");
                setSuccessMessage("Email sent successfully!");
                setShowForm(false);
            })
            .catch(error => {
                console.error(error.text);
                setErrorMessage("Failed to send email.");
                setSuccessMessage("");
            });
    };
    // const validateForm = () => {
    //     // Perform validation for required fields
    //     if (
    //         // !formData.employeeName ||
    //         // !formData.department ||
    //         // !formData.title ||
    //         // Include other required fields here
    //         (formData.databaseAccess === "Yes" && !Object.values(formData.moduleAccess).includes(true))
    //     ) {
    //         return false;
    //     }
    //     return true;
    // };

    return (
        <div>
            <NavigationBar />
            <h2>New Hire IT Checklist</h2>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name of Employee:
                        <input type='text' name='employeeName' value={formData.employeeName} onChange={handleChange} />
                    </label>

                    <label>
                        Department:
                        <select name='department' value={formData.department} onChange={handleChange}>
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
                        Title:
                        <input type='text' name='title' value={formData.title} onChange={handleChange} />
                    </label>

                    <label>
                        Supervisor Submitting Form:
                        <input type='text' name='supervisor' value={formData.supervisor} onChange={handleChange} />
                    </label>

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

                    <label>
                        Computer Monitors:
                        <select name='monitors' value={formData.monitors} onChange={handleChange}>
                            <option value=''>Select</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </label>

                    <label>
                        Access to Office Scanners:
                        <select name='scannerAccess' value={formData.scannerAccess} onChange={handleChange}>
                            <option value=''>Select</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </label>

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
                            <input
                                type='text'
                                name='sDriveLocation'
                                value={formData.sDriveLocation}
                                onChange={handleChange}
                            />
                        </label>
                    )}

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
                    {/* Sage Options */}
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
                    {/* Printer Access */}
                    <label>
                        Printer Access:
                        <select
                            name='printerAccess'
                            value={formData.printerAccess.yes ? "Yes" : "No"}
                            onChange={handleChange}
                        >
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

                    <button type='submit'>Submit</button>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                </form>
            ) : (
                <div> {successMessage && <p className='successmessage'>{successMessage}</p>}</div>
            )}
            <Footer />
        </div>
    );
};

export default NewHireForm;
