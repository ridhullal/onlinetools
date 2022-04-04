import React from "react";
import { Button, Col, Navbar, NavItem, NavLink, Row } from 'reactstrap'


function Header () {
    return (
        <Navbar style={{backgroundColor:"rgba(0, 130, 146, 0.7)", justifyContent: "flex-end" }}>
            <Col style={{flex: 5}}>
                <h1 style={{color:"white"}}>
                LOGO
                </h1>
            </Col>
            <Col style={{display: "flex"}}>
                <NavLink style={{color: "white"}}>Home</NavLink>
                <NavLink style={{color: "white"}}>About</NavLink>
                <NavLink style={{color: "white"}}>Sign In</NavLink> 
            </Col>
                
        </Navbar>
        
    )
}
export default Header