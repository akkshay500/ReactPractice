import React from "react";
import { LOGO_IMG } from "../utils/constants";

const Card = ()=>{
    return (
        <div className="card">
            <div className="res-image">
                <img className="card-img" src={LOGO_IMG}/>
            </div>
            <div className="res-details">
                <div className="name">ABC Farms</div>
                <div className="cuisines">Chinese, Asian, Fast Food</div>
                <div className="rating">4.5</div>
                <div className="costfortwo">600</div>
                <div className="deliverytime">36 minutes</div>
            </div>
        </div>
    )
};

export default Card;