import React from 'react';
import "../navbar/navbar.css";
import tempImg from "../../assests/soon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar'>
            <img src="sd" id='sidebar-logo' alt="Sidebar Logo" />
            <img src={tempImg} alt="Temporary Image" />
            <p id='login'>
                <Link to="/login">Login</Link>
                &nbsp; or &nbsp;
                <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}


export default Navbar;