import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Presale = () => {

    return(
        <div id="presale">
            <Container>
                <Row>
                    <Col md="12">
                        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
                            <h2>5 Series Presale</h2>
                            <p>Early investors have the chance to join our presale and become the first early-birds in our growing concept. Further information will be available on our social media channels.</p>
                            <NavLink href="/" className="app_btn">
                                Join Presale 
                            </NavLink>
                        </AnimationOnScroll>
 
                        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
                            <ul className='presale_list_wrap'>
                                <li>
                                    <div className='presale_mark'>
                                        <h3>Series</h3>
                                        <h2>A</h2>
                                    </div>
                                    <h4>100K $WATER</h4>
                                    <p>@ $1.30</p>
                                </li>
                                <li>
                                    <div className='presale_mark'>
                                        <h3>Series</h3>
                                        <h2>B</h2>
                                    </div>
                                    <h4>100K $WATER</h4>
                                    <p>@ $1.60</p>
                                </li>
                                <li>
                                    <div className='presale_mark'>
                                        <h3>Series</h3>
                                        <h2>C</h2>
                                    </div>
                                    <h4>100K $WATER</h4>
                                    <p>@ $1.90</p>
                                </li>
                                <li>
                                    <div className='presale_mark'>
                                        <h3>Series</h3>
                                        <h2>D</h2>
                                    </div>
                                    <h4>100K $WATER</h4>
                                    <p>@ $2.20</p>
                                </li>
                                <li>
                                    <div className='presale_mark'>
                                        <h3>Series</h3>
                                        <h2>E</h2>
                                    </div>
                                    <h4>100K $WATER</h4>
                                    <p>@ $2.50</p>
                                </li>
                            </ul>
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Presale;