import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Stakes = () => {

    return(
        <div id="stakes">
            <Container>
                <Row>
                    <Col md="12">
                        <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
                            <h2>{(Number(100000).toLocaleString(navigator.language, { minimumFractionDigits: 2 })) + '%'}</h2>
                            <h3>Base Staking APY</h3>
                            <NavLink href="/app" className="app_btn">
                                Begin Staking 
                            </NavLink>
                            <NavLink href="/">
                                Buy $WATER
                            </NavLink>
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stakes;