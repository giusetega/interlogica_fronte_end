// import './style.css';

import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header >
            <div id="menu-container">
                <div id="logo-container">
                    <div id="scritta-logo">
                        <Link to="/">
                            PASTICCERIA
                        </Link>
                    </div>
                </div>
                <div id="menu-item-container">
                    <div>
                        <Link to="/">Home </Link>
                    </div>
                    <div>
                        <Link to="/login">Login </Link>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
