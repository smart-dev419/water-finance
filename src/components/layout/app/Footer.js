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
                            <p>$WATER address: <span>0xb7BD896e1681701cA83181F8A231005EDA270e64</span></p>
                            <p>waterfinance.io version: <span>1.0.1</span></p>
                        </Col>

                        <Col md="4" xs="4">
                            <ul className="social_list">
                                <li>
                                    <a href="https://twitter.com/waterfinanceapp"><img src="./icon_twitter.png" alt="Twitter Icon" width={30} height={30}/></a>
                                </li>
                                <li>
                                    <a href="https://t.me/waterfinanceapp"><img src="./icon_telegram.png" alt="Telegram Icon" width={30} height={30}/></a>
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