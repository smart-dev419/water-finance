import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Withdraw = () => {

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
                            <div className='withdraw_list withdraw_content'>
                                <div><label>1922020 $WATER</label></div>
                                <div><label>1 Day</label></div>
                                <div><Button>Withdraw</Button></div>
                            </div>
                            <div className='withdraw_list withdraw_content'>
                                <div><label>1020 $WATER</label></div>
                                <div><label>30 Days</label></div>
                                <div><Button>200:14:19:20</Button></div>
                            </div>
                        </div>

                        <div className='mobile_withraw_wrap'>
                            <h2>Your Deposits</h2>
                            <div className='withdraw_list'>
                                <div>
                                    <label>Deposited</label>
                                    <p>1922020 $WATER</p>
                                </div>
                                <div>
                                    <label>Locking Period</label>
                                    <p>1 Day</p>
                                </div>
                                <div>
                                    <Button>Withdraw</Button>
                                </div>
                            </div>
                            <div className='withdraw_list'>
                                <div>
                                    <label>Deposited</label>
                                    <p>1020 $WATER</p>
                                </div>
                                <div>
                                    <label>Locking Period</label>
                                    <p>30 Days</p>
                                </div>
                                <div>
                                    <Button>200:14:19:20</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Withdraw;