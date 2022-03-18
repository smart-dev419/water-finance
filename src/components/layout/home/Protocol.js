import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Protocol = () => {

    return(
        <div id="protocol">
            <Container>
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}> 
                    <Row>
                        <Col md="5" className='protocol_wrap'>
                            <h2>How does the Water protocol work? </h2>
                            <NavLink href={'/app'} className="app_btn" target="_blank">
                                Open App 
                            </NavLink><br/>
                            <NavLink href="/">
                                Buy $Water 
                            </NavLink><br/>
                            <NavLink href="/">
                                Stake $WATER
                            </NavLink>
                        </Col>

                        <Col md="7">
                            <ul className='protocol_list_wrap'>
                                <li>
                                    <h3>1</h3>
                                    <h2>Buy $WATER</h2>
                                    <p>To purchase your $WATER tokens on PancakeSwap, you can swap $WATER with either BNB or BUSD. Don't forget to set the slippage to a minimum of 10%! </p>
                                </li>
                                <li>
                                    <h3>2</h3>
                                    <h2>Stake $WATER</h2>
                                    <p>Open the App on our website and connect your Metamask or Trustwallet. Go to the “Staking” section and select how many tokens you desire to stake.  </p>
                                </li>
                                <li>
                                    <h3>3</h3>
                                    <h2>Collect Staking Rewards</h2>
                                    <p>Staking rewards will be distributed directly to your wallet on our App. These rewards are automatically re-staked for an increased investment return.  </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </AnimationOnScroll>
            </Container>
        </div>
    );
}

export default Protocol;