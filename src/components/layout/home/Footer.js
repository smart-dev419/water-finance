import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col, NavLink } from 'reactstrap';

const Footer = () => {
    return (
        <Router>
            <footer>

                <Container>
                    <Row>
                        <Col md="3">
                            <h3>WATER FINANCE</h3>
                            <ul>
                                <li>
                                    <NavLink href="/app">STAKING</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/app">WITHDRAW</NavLink>
                                </li>
                            </ul>
                        </Col>

                        <Col md="3">
                            <h3>BUY $WATER</h3>
                            <ul>
                                <li>
                                    <NavLink href="/">PANCAKESWAP</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/">DEXTOOLS CHART</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/app">APP</NavLink>
                                </li>
                            </ul>
                        </Col>

                        <Col md="3">
                            <h3>SOCIAL LINKS</h3>
                            <ul className="footer_social">
                                <li>
                                    <NavLink href="https://twitter.com/waterfinanceapp"><img src="./icon_twitter.png" alt="Twitter Icon" /></NavLink>
                                </li>
                                <li>
                                    <NavLink href="https://t.me/waterfinanceapp"><img src="./icon_telegram.png" alt="Telegram Icon" /></NavLink>
                                </li>
                            </ul>
                        </Col>

                        <Col md="3">
                            <h3>ABOUT US</h3>
                            <p>Water Finance was created to reconstruct the current Defi APY Yielding market.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="12">
                            <p className="copyright">COPYRIGHT © 2022 WATER FINANCE ALL RIGHTS RESERVED</p>
                        </Col>
                    </Row>
                </Container>

            </footer>
        </Router>
    );
}

export default Footer;