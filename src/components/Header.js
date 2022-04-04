import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <div className="header-cont flex-cont">
            <div className="logo-cont">
                <a className="logo" href="/">LOGO</a>
            </div>
            <nav className="flex flex-grow justify-end">
                <ul className="flex-cont nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign In</a></li>
                </ul>
            </nav>
        </div>
        
    )
}
export default Header;

// <Navbar style={{backgroundColor:"rgba(0, 130, 146, 0.7)", justifyContent: "flex-end" }}>
// <Col style={{flex: 5}}>
//     <h1 style={{color:"white"}}>
//     LOGO
//     </h1>
// </Col>
// <Col style={{display: "flex"}}>
//     <NavLink style={{color: "white"}}>Home</NavLink>
//     <NavLink style={{color: "white"}}>About</NavLink>
//     <NavLink style={{color: "white"}}>Sign In</NavLink> 
// </Col>
    
// </Navbar>