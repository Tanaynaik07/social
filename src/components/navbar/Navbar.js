import React from 'react';
import "../navbar/navbar.css";
import tempImg from "../../assests/soon.png";
const Navbar=()=>{
    return(
        <div id='navbar'>
            <img src="sd" id='sidebar-logo'></img>
            <img src={tempImg}></img>
            <p id='login'>
            <a>Login</a>
            &nbsp;
            or
            &nbsp;
            <a>Signup</a>
            </p>
        </div>
    )
}

export default Navbar;