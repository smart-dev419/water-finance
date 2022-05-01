import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import Countdown, { zeroPad } from 'react-countdown';

const Treasury = (props) => {

    const {maxapy, treamount, tokenPrice} = props;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            window.location.reload()
        } else {
            return <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
        }
    };

    return(
        <div id="treasury">
            <Container>
                <Row>
                    <Col md="12">
                        <ul className='treasury_wrap'>
                            <li>
                                <label>
                                    Treasury
                                    <img src="./icon_treasury.png" alt="Treasury Icon" /> 
                                </label>
                                <Input value={'$' + (treamount || 'NAN')} readOnly/>
                            </li>
                            <li>
                                <label>
                                    Fixed APY
                                    <img src="./icon_apy.png" alt="APY Icon" /> 
                                </label>
                                <Input readOnly value={'100000%'}/>
                            </li>
                            <li>
                                <label>
                                    $WATER Price
                                    <img src="./icon_price.png" alt="Price Icon" /> 
                                </label>
                                <Input value={'$' + (tokenPrice || 'NAN')} readOnly/>
                            </li>
                            <li>
                                <label>
                                    Next Rebase
                                    <img src="./icon_clock.png" alt="Clock Icon" /> 
                                </label>
                                <p><Countdown date={Date.now() + 1800000 - (Date.now() % 1800000)} renderer={renderer}/></p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Treasury;