import React from "react"
import Search from "./Search";
import CardContainer from "./CardContainer";

const Body = ()=>{
    return(
    <div className="body">
        <Search/>
        <CardContainer/>
    </div>        
    )
}

export default Body;