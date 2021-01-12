import React from "react";
import Card from "./Card";

const TabNew = ({ dataNew, loading }) => {

    if (loading) {
        return <p>Loading...</p>
    }

    const mappedData = dataNew.map(item => {
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

export default TabNew;