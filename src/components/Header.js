
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <header className="bg-primary text-white">
            <div className="container d-flex justify-content-between align-items-center py-3">
                {/* Logo */}
                <div className="logo">
                    <h1 className="mb-0">Furama Resort</h1>
                </div>

                {/* Thanh điều hướng */}
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/customers">Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contracts">Contracts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;


