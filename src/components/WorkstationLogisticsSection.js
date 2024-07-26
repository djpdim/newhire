/** @format */

import React, { useState } from "react";
import "./work.css";

const WorkstationLogisticsSection = ({ formData, handleChange }) => {
    const [selectedOption, setSelectedOption] = useState(formData.workstationLogistics);

    const handleOptionClick = option => {
        setSelectedOption(option);
        handleChange({ target: { name: "workstationLogistics", value: option } });
    };

    const handleJobSiteChange = event => {
        const { name, value } = event.target;
        const capitalizedValue = value.replace(/\b\w/g, char => char.toUpperCase());
        handleChange({ target: { name, value: capitalizedValue } });
    };

    return (
        <>
            <h3>Workstation Logistics</h3>
            <div className='workstation-logistics-container'>
                <div className='option-group'>
                    <button
                        type='button'
                        className={`option-button ${selectedOption === "Office" ? "active" : ""}`}
                        onClick={() => handleOptionClick("Office")}
                    >
                        Office
                    </button>
                    {selectedOption === "Office" && (
                        <div className='office-options'>
                            <label>
                                Computer Configuration:
                                <select
                                    name='computerConfiguration'
                                    value={formData.computerConfiguration}
                                    onChange={handleChange}
                                    className='common-select'
                                >
                                    <option value=''>Select Option</option>
                                    <option value='Desktop'>Desktop</option>
                                    <option value='Laptop'>Laptop</option>
                                </select>
                            </label>
                        </div>
                    )}
                </div>

                <div className='option-group'>
                    <button
                        type='button'
                        className={`option-button ${selectedOption === "Jobsite" ? "active" : ""}`}
                        onClick={() => handleOptionClick("Jobsite")}
                    >
                        Jobsite
                    </button>
                    {selectedOption === "Jobsite" && (
                        <div className='jobsite-options'>
                            <label>
                                Job Site:
                                <input
                                    type='text'
                                    name='jobSite'
                                    placeholder='Enter Job Site'
                                    value={formData.jobSite || ""}
                                    onChange={handleJobSiteChange}
                                    className='common-input'
                                />
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default WorkstationLogisticsSection;

// /** @format */

// import React from "react";
// import "./work.css";

// const WorkstationLogisticsSection = ({ formData, handleChange }) => {
//     return (
//         <>
//             <h3>Workstation Logistics</h3>
//             <div className='workstation-logistics-container'>
//                 <div className='option-group'>
//                     <label>
//                         Office
//                         <input
//                             type='radio'
//                             name='workstationLogistics'
//                             value='Office'
//                             checked={formData.workstationLogistics === "Office"}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     {formData.workstationLogistics === "Office" && (
//                         <div className='office-options'>
//                             <label>
//                                 Computer Configuration:
//                                 <select
//                                     name='computerConfiguration'
//                                     value={formData.computerConfiguration}
//                                     onChange={handleChange}
//                                 >
//                                     <option value=''>Select Option</option>
//                                     <option value='Desktop'>Desktop</option>
//                                     <option value='Laptop'>Laptop</option>
//                                 </select>
//                             </label>
//                         </div>
//                     )}
//                 </div>

//                 <div className='option-group'>
//                     <label>
//                         Jobsite
//                         <input
//                             type='radio'
//                             name='workstationLogistics'
//                             value='Jobsite'
//                             checked={formData.workstationLogistics === "Jobsite"}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     {formData.workstationLogistics === "Jobsite" && (
//                         <div className='jobsite-options'>
//                             <input
//                                 type='text'
//                                 name='jobSite'
//                                 placeholder='Enter Job Site'
//                                 value={formData.jobSite || ""}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default WorkstationLogisticsSection;

// /** @format */

// import React from "react";

// const WorkstationLogisticsSection = ({ formData, handleChange }) => {
//     return (
//         <>
//             <h3>Workstation Logistics</h3>
//             <div>
//                 <label>
//                     Office
//                     <input
//                         type='radio'
//                         name='workstationLogistics'
//                         value='Office'
//                         checked={formData.workstationLogistics === "Office"}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 {formData.workstationLogistics === "Office" && (
//                     <div>
//                         <label>
//                             Computer Configuration:
//                             <select
//                                 name='computerConfiguration'
//                                 value={formData.computerConfiguration}
//                                 onChange={handleChange}
//                             >
//                                 <option value=''>Select Option</option>
//                                 <option value='Desktop'>Desktop</option>
//                                 <option value='Laptop'>Laptop</option>
//                             </select>
//                         </label>
//                     </div>
//                 )}
//                 <label>
//                     Jobsite
//                     <input
//                         type='radio'
//                         name='workstationLogistics'
//                         value='Jobsite'
//                         checked={formData.workstationLogistics === "Jobsite"}
//                         onChange={handleChange}
//                     />
//                     {formData.workstationLogistics === "Jobsite" && (
//                         <input
//                             type='text'
//                             name='jobSite'
//                             placeholder='Enter Job Site'
//                             value={formData.jobSite}
//                             onChange={handleChange}
//                         />
//                     )}
//                 </label>
//             </div>
//         </>
//     );
// };

// export default WorkstationLogisticsSection;
