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
                                    <NavLink href="/">APP</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/">NFT MINTING</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/">OPENSEA COLLECTION</NavLink>
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
                                    <NavLink href="/">APP</NavLink>
                                </li>
                            </ul>
                        </Col>

                        <Col md="3">
                            <h3>SOCIAL LINKS</h3>
                            <ul className="footer_social">
                                <li>
                                    <NavLink href="/"><img src="./icon_twitter.png" alt="Twitter Icon" /></NavLink>
                                </li>
                                <li>
                                    <NavLink href="/"><img src="./icon_telegram.png" alt="Telegram Icon" /></NavLink>
                                </li>
                            </ul>
                        </Col>

                        <Col md="3">
                            <h3>ABOUT US</h3>
                            <p>Water Finance was created by a group of enthusiasts spread accross the world, linking staking protocols with NFTs.</p>
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