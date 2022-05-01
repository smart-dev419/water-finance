import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Countdown, { zeroPad } from 'react-countdown';
import { withraw_web } from '../../Apps';

const Withdraw = (props) => {

    const {stackingList} = props;

    stackingList.sort((a,b) => (a.lastTime > b.lastTime) ? 1 : -1);

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        } else {
            return <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}</span>;
        }
    };

    const handleWithdraw = (userTime) => {
        withraw_web(userTime)
    }

    return(
        <div id="withraw">
            <Container>
                <Row>
                    <Col md="12">
                        <div className='withraw_wrap'>
                            <div className='withdraw_list'>
                                <div><label>Deposited</label></div>
                                <div><label>Locking Period</label></div>
                                <div><label>Withdraw</label></div>
                            </div>
                            {   
                                stackingList.map((list, index) =>
                                    <div key={index} className='withdraw_list withdraw_content'>
                                        <div><label>{list.amount} $WATER</label></div>
                                        <div><label>{list.period} Day</label></div>
                                        <div>
                                            {
                                                list.remainedTime === 0 ? <Button onClick={() => handleWithdraw(list.userTime)}>Withraw</Button> : <Button disabled><Countdown date={Date.now() + list.remainedTime} renderer={renderer}/></Button>
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className='mobile_withraw_wrap'>
                            <h2>Your Deposits</h2>
                            {   
                                stackingList.map((list, index) =>
                                    <div key={index} className='withdraw_list'>
                                        <div>
                                            <label>Deposited</label>
                                            <p>{list.amount} $WATER</p>
                                        </div>
                                        <div>
                                            <label>Locking Period</label>
                                            <p>{list.period} Day</p>
                                        </div>
                                        <div>
                                            {
                                                list.remainedTime === 0 ? <Button onClick={() => handleWithdraw(list.userTime)}>Withraw</Button> : <Button disabled><Countdown date={Date.now() + list.remainedTime} renderer={renderer}/></Button>
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Withdraw;