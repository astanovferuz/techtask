import React from "react";
import Card from "./Card";

const TabNew = ({ isOpen, toggle, state }) => {
    return (
        <div>
            <Card state={ state } isOpen={ isOpen } toggle={ toggle } />
        </div>
    )
}

export default TabNew;