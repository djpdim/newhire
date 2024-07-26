/** @format */

// App.js
import React, { useEffect } from "react";
import "./App.css";
import NewHireForm from "./NewHireForm";

function App() {
    useEffect(() => {
        // scroll to top on refresh
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <div className='App NewHireForm'>
            <main>
                <NewHireForm />
            </main>
        </div>
    );
}

export default App;
