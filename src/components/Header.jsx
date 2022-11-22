import React from 'react'
import Logo from "../assets/images/logo.png"
import "../assets/css/Header.css"
import { Link } from "react-router-dom";

const Header = (props) => {
    const { currentUser, isLoggedIn } = props;
    const currentUserTypeFormatted = isLoggedIn ? currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1) : "";

    return (
        <header className="header">
            <Link to="/">
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                    {/* <h1 className="brand-name">
                        <span className="brand-name-part1">Crop</span>
                        <span className="brand-name-part2">Deal</span>
                    </h1> */}
                </div>
            </Link>
            <ul className="nav-bar">
                <li className="nav-bar-item">
                    <Link to="/" >Home</Link>
                </li>
                <li className="nav-bar-item">
                    <Link to="/about" >About</Link>
                </li>

                
                {isLoggedIn ?
                    <>
                        <li className="nav-bar-item">
                            <Link to={`/${currentUser.userType}`}>{currentUserTypeFormatted} Dashboard</Link>
                        </li>
                        <li className="nav-bar-item login-btn">
                            <Link to="/profile" >Profile</Link>
                        </li>
                        <li className="nav-bar-item signup-btn">
                            <Link to="/logout" >Logout</Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="nav-bar-item login-btn">
                            <Link to="/login" >Login</Link>
                        </li>
                        <li className="nav-bar-item signup-btn">
                            <Link to="/signup" >Signup</Link>
                        </li>
                    </>
                }
            </ul>
        </header>
    )
}

export default Header