import React from "react";

const SideBar = ({ isActive }) => {
    return (
        <nav id="sidebar" className={ isActive ? "active" : null }>
            <div className="avatarDiv" />
            <ul className="list-unstyled components">
                <li><a href="#">Home</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Requests</a></li>
                <li><a href="#">Payment Settings</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sign Out</a></li>
            </ul>
        </nav>
    )
}

export default SideBar;