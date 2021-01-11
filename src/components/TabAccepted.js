import React from "react";
import Card from "./Card";

const TabAccepted = ({ isOpen, toggle }) => {
    return (
        <div>
            <Card isOpen={ isOpen } toggle={ toggle } />
        </div>
    )
}

export default TabAccepted;