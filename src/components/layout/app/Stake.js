import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import Slider from 'react-rangeslider';
import { staking_web } from '../../Apps';

const Stake = (props) => {
    const {amount, maxapy, apy, stakedAmount, rewaredAmount, supplyamount, tokenPrice} = props;
    const [slidervalue, setSliderValue] = useState(0); 
    const [amountvalue, setAmountValue] = useState(0); 
    const [periodValue, setPeriodValue] = useState(1);
    const [apyValue, setApyValue] = useState(0);

    useEffect(() => {
        const _apy = apy ? apy[0].value : "NAN";
        setApyValue(_apy + '%');
    }, [apy]); 

    const handleChange = slidervalue => {
        setSliderValue(slidervalue);
        setAmountValue(Math.round(slidervalue * amount / 100 * 100) / 100);
    };

    const periodChange = (event) => {
        setPeriodValue(event.target.value)
        apy.map(function (_apy, index) {
            if(event.target.value == _apy.type){
                setApyValue(_apy.value + '%')
            }
        });
    }

    const handleStake = () => {
        staking_web(periodValue, amountvalue)
    }

    const handleAmountChange = () => {
        setSliderValue(Number(amount));
        setAmountValue(Number(amount));
    };

    const formatPc = p => p + '%'

    return(
        <div id="stake">
            <Container>
                <Row>
                    <Col md="6">
                        <h2>Stake</h2>
                        <div className='stake_wrap'>

                            <div className='stake_value_wrap'>
                                <label>Stake $WATER ({amountvalue}/{Math.round(amount * 10000) / 10000})</label>
                                <div className='slider'>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={slidervalue}
                                        onChange={handleChange}
                                        format={formatPc}
                                    />
                                    <div className='slider_max'>
                                        <button onClick={() => handleAmountChange()}>MAX</button>
                                    </div>
                                </div>
                            </div>

                            <div className='stake_period_wrap'>
                                <label>Locking Period</label>
                                <ul>
                                    <li>
                                        <Input name="period" type='radio' id='period_one' value={1} defaultChecked={periodValue === 1} onChange={(e) => periodChange(e)} /><br/>
                                        <label htmlFor="period_one">1 Day</label>
                                    </li>
                                    <li>
                                        <Input name="period" type='radio' id='period_two' value={7} defaultChecked={periodValue === 7} onChange={(e) => periodChange(e)}/><br/>
                                        <label htmlFor="period_two">7 Days</label>
                                    </li>
                                    <li>
                                        <Input name="period" type='radio' id='period_three' value={30} defaultChecked={periodValue === 30} onChange={(e) => periodChange(e)} /><br/>
                                        <label htmlFor="period_three">30 Days</label>
                                    </li>
                                    <li>
                                        <Input name="period" type='radio' id='period_four' value={365} defaultChecked={periodValue === 365} onChange={(e) => periodChange(e)} /><br/>
                                        <label htmlFor="period_four">365 Days</label>
                                    </li>
                                </ul>
                            </div>

                            <label>APY</label>

                            <Input value={apyValue} readOnly className="stake_apy_btn"/>

                            <button className="stake_water_btn" onClick={() => handleStake()}>
                                Stake $WATER
                            </button>
                        </div>
                    </Col>

                    <Col md="6">
                        <h2>Statistics</h2>

                        <div className='stati_wrap'>
                            <div className='stati'>
                                <label>Total Value Locked</label>
                                <p>${Number.parseFloat(rewaredAmount * tokenPrice).toFixed(2) || 'NAN'}</p>
                            </div>
                            <div className='stati'>
                                <label>Total Value Staked</label>
                                <p>${Number.parseFloat(stakedAmount * tokenPrice).toFixed(2) || 'NAN'}</p>
                            </div>
                            <div className='stati'>
                                <label>Fixed APY</label>
                                <p>100000%</p>
                            </div>
                            <div className='stati'>
                                <label>Max Daily Rate</label>
                                <p>2% ROI</p>
                            </div>
                            <div className='stati'>
                                <label>Market Cap</label>
                                <p>${supplyamount || 'NAN'}</p>
                            </div>
                            <div className='stati'>
                                <label>Floor Price</label>
                                <p>${tokenPrice || 'NAN'}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stake;