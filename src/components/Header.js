import React from "react";
import { NavLink, Link} from "react-router-dom";

function Header () {
    return (
        <div className="header-cont flex-cont">
            <div className="logo-cont">
                <a className="logo" href="/">LOGO</a>
            </div>
            <nav className="flex flex-grow justify-end mx-md:justify-around mx-md:mt-2">
                <ul className="flex-cont nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/SignIn'>Sign In</Link></li>
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