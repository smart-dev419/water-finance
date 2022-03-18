import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Rewards = () => {

    return(
        <div id="rewards">
            <Container>
                <Row>
                    <Col md="5" className='rewards_wrap'>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
                            <h2>Daily Staking Rewards</h2>
                            <p>Earning rewards by holding tokens could never be easier with Auto-Compounding. To get the benfit of earning daily rewards on your invested tokens simply, stake and let the rewards add up!</p>
                            <NavLink href={'/app'} className="app_btn" target="_blank">
                                Open App 
                            </NavLink>
                            <NavLink href="/">
                                Docs&nbsp;
                                <img src="./icon_docs.png" alt="Docs Icon" />
                            </NavLink>
                        </AnimationOnScroll>
                    </Col>

                    <Col md="7">
                        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
                            <ul className='rewards_list_wrap'>
                                <li>
                                    <h2>Staking APY</h2>
                                    <p>Each user has the ability to earn high returns on their investment, by compiling Staking NFTs in our App.</p>
                                </li>
                                <li>
                                    <h2>Auto-Compounding</h2>
                                    <p>Water Finance takes care of compounding your $WATER tokens at each rebase for you. </p>
                                </li>
                                <li>
                                    <h2>Floor Price</h2>
                                    <p>The floor price rises with each transaction, increasing the minimal price and securing your investment.</p>
                                </li>
                            </ul>
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Rewards;