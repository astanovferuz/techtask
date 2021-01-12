import React from "react";
import Card from "./Card";

const TabDeclined = ({ dataDeclined, loading }) => {

    if (loading) {
        return <p>Loading...</p>
    }

    const mappedData = dataDeclined.map(item => {
        return (
            <Card key={ item.id } item={ item } />
        )
    })

    return (
        <div className="container mt-4">
            <div className="row">
                { mappedData }
            </div>
        </div>
    )
}

export default TabDeclined;