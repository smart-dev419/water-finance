import React, { useState } from 'react';
import { Container, Row, Col, NavLink, Input } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Apy = () => {

    const[inputValue, setInputValue] = useState('$100,000.00')

    return(
        <div id="apy">
            <Container>
                <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
                    <Row>
                        <Col md="5" className='apy_wrap'>
                        
                            <h2>Crypto returns, with an incredible APY</h2>
                            <h4>They say money doesn't grow on trees. <img src="./icon_emoji.png" alt="Emoji Icon" /></h4>
                            <p><a href='/'>Water Finance</a> offers up to 2% daily yields that will change your opinion.<br/><i>Daily rewards are comparable to yearly returns in the traditional banking system!</i></p>
                            <NavLink href="/" className="app_btn">
                                Get Started With Water Staking 
                            </NavLink>
                        </Col>

                        <Col md="7">
                            <div className='apy_period_wrap'>
                                <div className='apy_return_wrap'>
                                    <p>PROJECTED RETURN</p>
                                    <h2>$300,000,000.01</h2>
                                </div>

                                <div className='apy_amount_wrap'>
                                    <label>Investment Amount</label>   
                                    <Input name='amount' onChange={(e) => {setInputValue(e.target.value)}} value={inputValue} />
                                </div>

                                <div className='apy_period_sub_wrap'>
                                    <label>Locking Period</label>

                                    <ul>
                                        <li>
                                            <Input type='radio' name='period' id='period_one'/><br/>
                                            <label htmlFor="period_one">1 Day</label>
                                        </li>
                                        <li>
                                            <Input type='radio' name='period' id='period_two'/><br/>
                                            <label htmlFor="period_two">7 Days</label>
                                        </li>
                                        <li>
                                            <Input type='radio' name='period' id='period_three'/><br/>
                                            <label htmlFor="period_three">30 Days</label>
                                        </li>
                                        <li>
                                            <Input type='radio' name='period' id='period_four'/><br/>
                                            <label htmlFor="period_four">365 Days</label>
                                        </li>
                                    </ul>
                                </div>

                                <div className='apy_desc_wrap'>
                                    <h2>Earn Rewards By Holding And Staking $WATER Tokens </h2>
                                    <p>The projected return is calculated using the current APY combined with the selected parameters. Be sure to do your own calculations before you invest. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </AnimationOnScroll>
            </Container>
        </div>
    );
}

export default Apy;