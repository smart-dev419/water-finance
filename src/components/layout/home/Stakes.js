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
                            <img src="./stake_mark.png" alt="Stake Mark" />
                            <h2>Max Staking APY</h2>
                            <NavLink href="/" className="app_btn">
                                Begin Staking 
                            </NavLink>
                            <NavLink href="/">
                                Buy $WATER
                            </NavLink>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                            <ul className='stakes_list_wrap'>
                                <li>
                                    <img src="./stake_icon1.png" alt="Icon Image1" />
                                    <p>Watching this team work and develop their vision into a project that satisfies the consumers needs, gives me the confidence in the overall potential of Water Finance. </p>
                                    <h3>Jarrod Williams</h3>
                                    <h4>EARLY GROUP MEMBER</h4>
                                </li>
                                <li>
                                    <img src="./stake_icon2.png" alt="Icon Image2" />
                                    <p>Going from the recent craze of the DAOs this will finally be a reasonable project that could play out long term.</p>
                                    <h3>Andre Trziansk</h3>
                                    <h4>SENIOR NFT DEVELOPER</h4>
                                </li>
                                <li>
                                    <img src="./stake_icon3.png" alt="Icon Image3" />
                                    <p>Looking forward to seeing if they live up to the hype. We’ll see how it goes once we see the contract codes...</p>
                                    <h3>Song Lee</h3>
                                    <h4>SOLIDITY CODE ADVISOR</h4>
                                </li>
                                <li>
                                    <img src="./stake_icon4.png" alt="Icon Image4" />
                                    <p>A girl in the crypto space only gets her ass licked, but do the research, understand the tech and you’ll know to invest into $WATER!</p>
                                    <h3>ErikkZA</h3>
                                    <h4>GROWING FEMALE ARTIST</h4>
                                </li>
                                <li>
                                    <img src="./stake_icon5.png" alt="Icon Image5" />
                                    <p>I've been working with the team on creating the initial marketing strategy. The data received from testing shows more than promising results. We’re creating the hype right now.</p>
                                    <h3>Berge Swensen</h3>
                                    <h4>PPC MARKETING SPECIALIST</h4>
                                </li>
                                <li>
                                    <img src="./stake_icon6.png" alt="Icon Image6" />
                                    <p>I've been in a lot of ruggs that show billions in apy, glad that we will finally see something realistic with just 2% daily in the mataverse. Might even live long term.</p>
                                    <h3>Jimminixz</h3>
                                    <h4>FELLOW ENTHUSIAST</h4>
                                </li>
                            </ul>
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stakes;