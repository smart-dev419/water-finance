import React from 'react';
import { Container, Row, Col, Input, NavLink } from 'reactstrap';

const Stake = () => {

    return(
        <div id="stake">
            <Container>
                <Row>
                    <Col md="6">
                        <h2>Stake</h2>
                        <div className='stake_wrap'>
                            <div className='stake_amount_wrap'>
                                <label>
                                    Amount
                                </label>
                                <Input defaultValue={'820.543%'}/>
                                <span>MAX</span>
                            </div>

                            <div className='stake_period_wrap'>
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

                            <NavLink href="/" className="stake_apy_btn">
                                10,101% APY
                            </NavLink>

                            <NavLink href="/" className="stake_water_btn">
                                Stake $WATER
                            </NavLink>
                        </div>
                    </Col>

                    <Col md="6">
                        <h2>Statistics</h2>

                        <div className='stati_wrap'>
                            <label>Total Value Deposited</label>
                            <p>$120,029.20 BUSD</p>
                            <label>Market Cap</label>
                            <p>$139,220,029.20 </p>
                            <label>Max APY</label>
                            <p>10,392.93%</p>
                            <label>Max Daily Rate</label>
                            <p>2% ROI</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stake;