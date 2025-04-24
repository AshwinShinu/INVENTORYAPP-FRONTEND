import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Dashboard from "./Dashboard";
import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <h1 className="text-blue-500 text-center">PAN Card Management System</h1>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Dashboard />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;