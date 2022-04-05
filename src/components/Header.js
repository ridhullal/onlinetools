import React from "react";
import { Link} from "react-router-dom";

function Header () {
    return (
        <div className="header-wrap">
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
        </div>
    )
}
export default Header;
