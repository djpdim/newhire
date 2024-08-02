/** @format */

import emailjs from "emailjs-com";
import React, { useState } from "react";
import DatabaseAccessSection from "./components/DatabaseAccessSection";
import EmployeeInfoSection from "./components/EmployeeInfoSection";
import Footer from "./components/Footer";
import HardwareOptions from "./components/HardwareOptions";
import NavigationBar from "./components/NavigationBar";
import OtherAccessSection from "./components/OtherAccessSection";
import PrinterAccessSection from "./components/PrinterAccessSection";
import SoftwareOptionsSection from "./components/SoftwareOptionsSection";
import WorkstationLogisticsSection from "./components/WorkstationLogisticsSection";
import SDriveAccess from "./components/sDriveAccess";

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
        pdfNeeded: "",
        pdfOptions: {
            adobePDF: false,
            nitroPDF: false,
            bluePDF: false,
            litePDF: false,
        },
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
            yes: "",
            estPrintRoom: false,
            thirdFloorPrintRoom: false,
            adminPrintRoom: false,
            other: "",
        },
    });

    const [showDatabaseAccessOptions, setShowDatabaseAccessOptions] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [missingFields, setMissingFields] = useState([]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        // Split the name to get the root name and the sub-option (if any)
        const [rootName, optionName] = name.split("-");

        setFormData(prevState => {
            const newState = { ...prevState };

            switch (rootName) {
                case "printerAccess":
                    if (optionName) {
                        newState.printerAccess[optionName] = type === "checkbox" ? checked : value;
                    } else {
                        newState.printerAccess.yes = value;
                        if (value === "No") {
                            newState.printerAccess.estPrintRoom = false;
                            newState.printerAccess.thirdFloorPrintRoom = false;
                            newState.printerAccess.adminPrintRoom = false;
                            newState.printerAccess.other = "";
                        }
                    }
                    break;

                case "pdfOptions":
                    newState.pdfOptions[optionName] = checked;
                    break;

                case "sageOptions":
                    newState.sageOptions[optionName] = checked;
                    break;

                case "moduleAccess":
                    newState.moduleAccess[optionName] = checked;
                    break;

                default:
                    newState[name] = type === "checkbox" ? checked : value;
                    if (name === "databaseAccess") {
                        setShowDatabaseAccessOptions(value === "Yes");
                    }
            }

            return newState;
        });

        if (missingFields.includes(name)) {
            setMissingFields(prevMissingFields => prevMissingFields.filter(field => field !== name));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const requiredFields = ["employeeName", "department", "supervisor", "title"];
        const missing = requiredFields.filter(field => !formData[field]);

        if (missing.length > 0) {
            setMissingFields(missing);
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        const pdfOptionsLabels = {
            adobePDF: "Adobe DC Pro",
            litePDF: "Adobe PDF Viewer",
            nitroPDF: "Nitro PDF",
            bluePDF: "BlueBeam",
        };

        const pdfOptionsSelected = Object.keys(formData.pdfOptions)
            .filter(key => formData.pdfOptions[key])
            .map(key => pdfOptionsLabels[key])
            .join(", ");

        const printerOptions = [
            formData.printerAccess.estPrintRoom ? "Est Print Room" : "",
            formData.printerAccess.thirdFloorPrintRoom ? "3rd Floor Print Room" : "",
            formData.printerAccess.adminPrintRoom ? "Admin Print Room" : "",
            formData.printerAccess.other ? `Other: ${formData.printerAccess.other}` : "",
        ]
            .filter(option => option)
            .join("\n");

        const printerAccessSection =
            formData.printerAccess.yes === "Yes" ? `Printer Access: Yes\n${printerOptions}` : "Printer Access: No";

        let softwareOptionsSection = "Software Options\n-----------------\n";
        softwareOptionsSection += `S Drive Access: ${formData.sDriveAccess || "No"}${
            formData.sDriveAccess === "Yes" ? `\nS Drive Location: ${formData.sDriveLocation || "No"}` : ""
        }\n`;
        softwareOptionsSection += `PDF Editor: ${pdfOptionsSelected || "No"}\n`;
        softwareOptionsSection += `AutoCAD Access: ${formData.autoCADAccess || "No"}\n`;
        softwareOptionsSection += `Primavera Access: ${formData.primaveraAccess || "No"}\n`;
        softwareOptionsSection += `Planswift Access: ${formData.planswiftAccess || "No"}\n`;
        softwareOptionsSection += `Sage Access: ${formData.sageNeeded || "No"}${
            formData.sageNeeded === "Yes"
                ? `\nSage Options: ${
                      Object.keys(formData.sageOptions)
                          .filter(key => formData.sageOptions[key])
                          .map(key => {
                              const words = key.split(/(?=[A-Z])/);
                              return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                          })
                          .join(", ") || "No"
                  }`
                : ""
        }\n`;
        softwareOptionsSection += `Database Access: ${formData.databaseAccess || "No"}${
            formData.databaseAccess === "Yes"
                ? `\nDatabase Access Options: ${
                      Object.keys(formData.moduleAccess)
                          .filter(key => formData.moduleAccess[key])
                          .map(key => {
                              const words = key.split(/(?=[A-Z])/);
                              return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                          })
                          .join(", ") || "No"
                  }`
                : ""
        }`;

        const message = `
        Employee Name: ${formData.employeeName}
        Department: ${formData.department}
        Title: ${formData.title}
        Supervisor Name: ${formData.supervisor}
        Workstation Logistics: ${formData.workstationLogistics || "No"}

        Hardware Options
        -----------------
        Computer Configuration: ${formData.computerConfiguration || "No"}
        Monitors: ${formData.monitors || "No"}

        Printer & Scanner Access
        -----------------
        ${printerAccessSection}
        Scanner Access: ${formData.scannerAccess || "No"}

        ${softwareOptionsSection.trim()}
    `;

        const emailParams = {
            employee: "IT Checklist for the New Hire",
            message: message.trim(),
            from_name: formData.employeeName,
            supervisor: formData.supervisor,
        };
        setMissingFields([]);
        setErrorMessage("");

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                response => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSuccessMessage(
                        `Has been submitted successfully!
                        <a href="/" class="success-link"> Home Page</a>`
                    );
                    setShowForm(false);
                },
                error => {
                    console.log("FAILED...", error);
                    setErrorMessage("There was an error submitting the form. Please try again.");
                }
            );
    };

    return (
        <div>
            <NavigationBar />
            <h2>New Hire IT Checklist</h2>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <EmployeeInfoSection
                        formData={formData}
                        handleChange={handleChange}
                        missingFields={missingFields}
                    />
                    <WorkstationLogisticsSection formData={formData} handleChange={handleChange} />
                    <HardwareOptions formData={formData} handleChange={handleChange} />
                    <PrinterAccessSection formData={formData} handleChange={handleChange} />
                    <SDriveAccess formData={formData} handleChange={handleChange} />
                    <SoftwareOptionsSection formData={formData} handleChange={handleChange} />
                    <DatabaseAccessSection
                        formData={formData}
                        handleChange={handleChange}
                        showDatabaseAccessOptions={showDatabaseAccessOptions}
                    />
                    <OtherAccessSection formData={formData} handleChange={handleChange} />
                    <button type='submit'>Submit</button>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                </form>
            ) : (
                <div>
                    {successMessage && (
                        <div className='successmessage' dangerouslySetInnerHTML={{ __html: successMessage }} />
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default NewHireForm;
