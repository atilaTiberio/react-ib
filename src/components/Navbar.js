import React from 'react'
import NavItem from "./NavItem";

const Navbar = () => {

    return (
        <nav className="nav-wrapper red darken-1">
            <div className="container">
                <a href="#?" className="brand-logo"> Training with React </a>
                <ul className="right">
                    <NavItem exact to='/' anyOther={"test"}>Home</NavItem>
                    <NavItem to='/content'>Content</NavItem>
                    <NavItem to='/about'>About</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                    <NavItem to='/NewForm'>NewForm</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;