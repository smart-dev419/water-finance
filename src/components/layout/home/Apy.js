import React, { useState, useEffect } from 'react';
import { Container, Row, Col, NavLink, Input } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Apy = () => {
    const [priceValue, setPriceValue] = useState(100000000)
    const [amountvalue, setAmountValue] = useState(1000); 
    const [periodValue, setPeriodValue] = useState(1);
    const [apyValue, setApyValue] = useState(0);
    const [rateValue, setRateValue] = useState(2);
    const defaultApy = [
        {
            type: 1,
            value: 150000,
        },
        {
            type: 7,
            value: 300000,
        },
        {
            type: 30,
            value: 1000000,
        },
        {
            type: 365,
            value: 10000000,
        }
    ]

    useEffect(() => {
        const _apy = defaultApy;
        const _reward = Math.pow(Number(_apy[0].value) / 100, 1 / 17520);
        const _price = 1000 * Math.pow(_reward, (Number(_apy[0].type) * 48));
        const _rate = Math.round((_reward - 1) * 100 * 48);
        setRateValue(_rate)
        setApyValue(_apy[0]);
        setPriceValue(_price)
    }, []); 

    const periodChange = (event) => {
        setPeriodValue(event.target.value)
        const apy_list = defaultApy;
        apy_list.map((_apy) => {
            if(event.target.value == _apy.type){
                setApyValue(_apy.value)
                const _reward = Math.pow(Number(_apy.value) / 100, 1 / 17520);
                const _price = Number(amountvalue) * Math.pow(_reward, (Number(event.target.value) * 48));
                const _rate = Math.round((_reward - 1) * 100 * 48 * 100) / 100;
                setRateValue(Math.ceil(_rate * 10) / 10)
                setPriceValue(_price)
            }
            return
        });
    }

    const amountChange = (event) => {
        setAmountValue(event.target.value)
        const _reward = Math.pow(Number(apyValue) / 100, 1 / 17520);
        const _price = Number(event.target.value) * Math.pow(_reward, (Number(periodValue) * 48));
        setPriceValue(_price)
    }

    return(
        <div id="apy">
            <Container>
                <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
                    <Row>
                        <Col md="5" className='apy_wrap'>
                        
                            <h2>Crypto returns, with an incredible APY</h2>
                            <h4>They say money doesn't grow on trees. <img src="./icon_emoji.png" alt="Emoji Icon" /></h4>
                            <p><a href='/'>Water Finance</a> offers up to {rateValue}% daily yields that will change your opinion.<br/><i>Daily rewards are comparable to yearly returns in the traditional banking system!</i></p>
                            <NavLink href="/app" className="app_btn">
                                Get Started With Water Staking 
                            </NavLink>
                        </Col>

                        <Col md="7">
                            <div className='apy_period_wrap'>
                                <div className='apy_return_wrap'>
                                    <p>PROJECTED RETURN</p>
                                    <h2>{'$' + (Number(priceValue || 100000).toLocaleString(navigator.language, { minimumFractionDigits: 2 }))}</h2>
                                </div>

                                <div className='apy_amount_wrap'>
                                    <label>Investment Amount</label>   
                                    <div>
                                        <Input name='amount' placeholder={0} onChange={(e) => amountChange(e)} value={amountvalue} />
                                        <span>$</span>
                                    </div>
                                </div>

                                <div className='apy_period_sub_wrap'>
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