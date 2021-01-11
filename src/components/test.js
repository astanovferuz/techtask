import React, { useState } from "react";
import { Nav, NavItem, Collapse, NavLink, Input } from 'reactstrap';

const Test = () => {

    const [ isActive, setIsActive ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <div className="wrapper">
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

                <div id="content">

                    <div>
                        <button onClick={ toggleActive } type="button" id="sidebarCollapse" className={ isActive ? "navbar-btn active m-3" : "navbar-btn m-3" }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className="uniMargin container">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-white">Requests</h2>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <Nav pills>
                                    <NavItem>
                                        <NavLink className="navlinkBold mx-2" href="#" active>NEW</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="navlinkBold mx-2" href="#">ACCEPTED</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="navlinkBold mx-2" href="#">DECLINED</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 m-3 collapsible text-white">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="cardAvatar" src="https://s3.eu-central-1.amazonaws.com/cdn.25superstars.staging.com/users/thumbnails/photos/thumbnail-photo-jana.craemer.jpg" alt="" />
                                    </div>
                                    <div className="col mt-3">
                                        <p className="text-white mb-0 fontSlick"><span className="textBold">John Doe</span> has requested <span className="textBold">Stich</span></p>
                                        <p className="text-white">130.0 $</p>
                                        <Collapse isOpen={ isOpen }>
                                            <p className="mb-0">Link:</p>
                                            <Input className="mb-4" placeholder="https://google.com" />
                                            <button className="btn btn-primary uploadButton mb-3">UPLOAD VIDEO</button>
                                            <br />
                                        </Collapse>
                                        { !isOpen ? <a onClick={ toggle } className="btn offset-md-1 pl-0 mb-3 ml-0 smsl">SHOW MORE <span><i className="fa fa-chevron-down" /></span></a> :
                                            <a onClick={ toggle } className="btn offset-md-1 pl-0 mb-3 ml-0 smsl">SHOW LESS <span><i className="fa fa-chevron-up" /></span></a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;