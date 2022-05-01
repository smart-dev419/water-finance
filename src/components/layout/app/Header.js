import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { BrowserRouter as Router } from "react-router-dom";

const Header = (props) => {

    const {acc, onConnect, disconnet} = props;

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <Router>
            <header>
                <Container>
                    <Navbar expand="md">
                        <Button onClick={handleClick} className={`mobile_menu_btn ${isOpen ? "active" : ""}`}>
                            <span></span><span></span><span></span>
                        </Button>
                        
                        <NavbarBrand href="/">
                            <img src="./logo.png" alt="logo" width={55} height={55}/> 
                            <h1>Water Finance</h1>
                        </NavbarBrand>
                        
                        <Collapse navbar isOpen={isOpen}>
                            <Nav className="left-nav" navbar>
                                <NavItem>
                                    <NavLink href="mailto:info@waterfinance.io">
                                        Support
                                        <img src="./icon_support_app.png" alt="Support Icon" /> 
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="https://docs.waterfinance.io">
                                        Docs
                                        <img src="./icon_docs_app.png" alt="Docs Icon" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                        <Nav className="right-nav" navbar>
                            <NavItem>
                                <NavLink href="/" className="water_btn">
                                    Buy $WATER
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <button className="wallet_btn" onClick={acc ? disconnet : onConnect}>
                                {acc ? ("Disconnect") : (<><img src="./icon_wallet.png" alt="Wallet Icon" width={25} height={20}/>&nbsp;Connect Wallet</>)}
                                </button>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </header>
        </Router>
    );
}

export default Header;