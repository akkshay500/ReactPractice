import React from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logoElement">
                <img className="site-logo" src={LOGO_IMG}/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;