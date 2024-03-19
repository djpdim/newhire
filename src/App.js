/** @format */

// App.js
import React from "react";
import "./App.css";
// import CompanyLogo from "./assets/megalg.svg"; // Import the company logo image
import NewHireForm from "./components/NewHireForm";

function App() {
    return (
        <div className='App NewHireForm'>
            {/* <header className='App-header'>
                <img src={CompanyLogo} alt='Company Logo' className='logo' />
                <h1 className='text-xl font-bold'>New Hire IT Checklist Form</h1>
            </header> */}
            <main>
                <NewHireForm />
            </main>
        </div>
    );
}

export default App;
