import React, { useState } from "react";
import Card from "./Card";
import { useState } from "react";

const CardContainer = () => {
    const [RestaurantList, setRestaurantList] = useState([]);
    return (
        <div className="card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
};

export default CardContainer;