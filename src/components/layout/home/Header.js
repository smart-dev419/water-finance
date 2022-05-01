import React, { useState, useEffect, useRef } from "react";
import { Container, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, Button, } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Countdown from 'react-countdown';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [progressState, setProgressState] = useState(false);
    const [launchTime, setLaunchTime] = useState(false);
    const progress = useRef();
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const dates = new Date("2022-04-21 15:00:00 UTC");
        const lanuch_time = dates.getTime() - Date.now();
        setLaunchTime(lanuch_time);
    }, [])
       
    useEffect(() => {
        const interval = setInterval(() => {
            if(progress.current.offsetWidth === 0) {
                clearInterval(interval);
                setProgressState(true)
            }
        }, 1000);
    }, [progress])

    return(
        <Router>
            
            <header>
                <div className="top_banner">
                    {
                        progressState 
                        ?
                            <div>
                                The website is currently in a testing version until we launch!<br/>
                                Launching in: <Countdown date={Date.now() + launchTime}/>
                            </div>
                        :
                            <div>
                                IMPORTANT ALERT:
                                <Link to="/app">   
                                    Always double-check that you are browsing on waterfinance.io
                                </Link>
                            </div>
                    }
                   
                    <div className="progress">
                        <div ref={progress} className="progress-bar"></div>
                    </div>
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
                                    <NavLink href="mailto:info@waterfinance.io">
                                        Support
                                        <img src="./icon_support.png" alt="Support Icon" /> 
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="https://docs.waterfinance.io">
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