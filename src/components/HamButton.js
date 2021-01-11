import React from "react";

const HamButton = ({ isActive, toggleActive }) => {
    return (
        <div>
            <button onClick={ toggleActive } type="button" id="sidebarCollapse" className={ isActive ? "navbar-btn active m-3" : "navbar-btn m-3" }>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

export default HamButton;