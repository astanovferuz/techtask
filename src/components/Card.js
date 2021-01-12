import React, { useState } from "react";
import { Input } from "reactstrap";
import { Accordion, Card, Button } from "react-bootstrap";

const CardCollapsible = ({ item }) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="col-md-6">
            <div className="collapsible m-2">
                <div className="row">
                    <img className="cardAvatar ml-5 mt-3" src="https://s3.eu-central-1.amazonaws.com/cdn.25superstars.staging.com/users/thumbnails/photos/thumbnail-photo-jana.craemer.jpg" alt="" />
                    <div className="col ml-md-2 ml-4">
                        <p className="text-white fontSlick mb-0 mt-3"><span className="textBold">{ item.requesterName }</span> has requested <span className="textBold">Stich</span></p>
                        <p className="text-white">{ item.price } $</p>
                        <Accordion>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="pt-0 pl-0">
                                    <p className="my-0">Link:</p>
                                    <Input className="mb-4" placeholder={ item.contentLink } />
                                    <button className="btn btn-primary uploadButton mb-3">UPLOAD VIDEO</button>
                                    <br />
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle className="pl-0" as={ Button } variant="link" eventKey="0">
                                { !isOpen ? <a onClick={ toggle } className="btn offset-md-1 pl-0 mb-3 ml-0 smsl">SHOW LESS <span><i className="fa fa-chevron-up" /></span></a> :
                                    <a onClick={ toggle } className="btn offset-md-1 pl-0 mb-3 ml-0 smsl">SHOW MORE <span><i className="fa fa-chevron-down" /></span></a>
                                }
                            </Accordion.Toggle>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCollapsible;