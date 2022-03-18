import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Router>
            <footer>

                <Container>
                    <Row>
                        <Col md="8" xs="8">
                            <p>$WATER address: <span>0xDD4c48C0B24039969fC16D1cdF626eaB821d3384</span></p>
                            <p>waterfinance.io version: <span>1.0.1</span></p>
                        </Col>

                        <Col md="4" xs="4">
                            <ul className="social_list">
                                <li>
                                    <a href="/"><img src="./icon_twitter_app.png" alt="Twitter Icon" width={30} height={25}/></a>
                                </li>
                                <li>
                                    <a href="/"><img src="./icon_telegram_app.png" alt="Telegram Icon" width={30} height={25}/></a>
                                </li>
                                <li>
                                    <a href="/"><img src="./icon_social.png" alt="Social Icon" width={25} height={25}/></a>
                                </li>
                                <li>
                                    <a href="/"><img src="./icon_flag.png" alt="Flag Icon" width={20} height={20}/></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </footer>
        </Router>
    );
}

export default Footer;