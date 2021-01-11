import React from "react";
import { Collapse, Input } from "reactstrap";

const Card = ({ isOpen, toggle }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-5 m-3 mt-5 collapsible text-white">
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
    )
}

export default Card;