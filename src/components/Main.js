import React, { useState } from "react";
import SideBar from "./SideBar";
import HamButton from "./HamButton";
import NavTabs from "./NavTabs";

const Main = () => {

    const [ isActive, setIsActive ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="wrapper">
            <SideBar isActive={ isActive } />
            <div id="content">
                <HamButton isActive={ isActive } toggleActive={ toggleActive } />
                <div className="uniMargin container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-white">Requests</h2>
                        </div>
                    </div>
                    <NavTabs isOpen={ isOpen } toggle={ toggle } />
                </div>
            </div>
        </div>
    )
}

export default Main;