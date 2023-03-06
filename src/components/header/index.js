import React from "react";
import NavBar from './../navbar';
import './index.css';

const Header = () => (
    <header className="header">
        <div className="main-top">
            <div className="main-icon">
                <h1>Icon</h1>
            </div>
            <div className="main-options">
                <ul>
                    <li>Bogotà te escucha</li>
                    <li>Internacional</li>
                    <li>Buscar</li>
                </ul>
            </div>
        </div>
        <main>
            <NavBar />
        </main>
    </header>
)

export default Header; 