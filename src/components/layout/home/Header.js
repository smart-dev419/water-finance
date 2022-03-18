import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <Router>
            <header>
                <div className="top_banner">
                    <Link to="/">   
                        Make that you are on waterfinance.io
                    </Link>
                </div>

                <Container>
                    <Navbar expand="md">
                        <Button onClick={handleClick} className={`mobile_menu_btn ${isOpen ? "active" : ""}`}>
                            <span></span><span></span><span></span>
                        </Button>

                        <NavbarBrand href="/">
                            <img src="./logo.png" alt="logo" /> 
                            <h1>Water Finance</h1>
                        </NavbarBrand>
                        
                        <Collapse navbar isOpen={isOpen}>
                            <Nav className="left-nav" navbar>
                                <NavItem>
                                    <NavLink href="/">
                                        Support
                                        <img src="./icon_support.png" alt="Support Icon" /> 
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/">
                                        Docs
                                        <img src="./icon_docs.png" alt="Docs Icon" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                            
                        <Nav className="right-nav" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Buy $WATER
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href={'/app'} className="app_btn" target="_blank">
                                    Open App
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </header>
        </Router>
    );
}

export default Header;