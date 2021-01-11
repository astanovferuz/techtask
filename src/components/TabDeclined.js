import React from "react";
import Card from "./Card";

const TabDeclined = ({ isOpen, toggle }) => {
    return (
        <div>
            <Card isOpen={ isOpen } toggle={ toggle } />
        </div>
    )
}

export default TabDeclined;