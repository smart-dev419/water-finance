import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

const Treasury = () => {

    return(
        <div id="treasury">
            <Container>
                <Row>
                    <Col md="12">
                        <ul className='treasury_wrap'>
                            <li>
                                <label>
                                    Treasury&nbsp;
                                    <img src="./icon_treasury.png" alt="Treasury Icon" /> 
                                </label>
                                <Input defaultValue={'$10,000,000'}/>
                            </li>
                            <li>
                                <label>
                                    Max APY&nbsp;
                                    <img src="./icon_apy.png" alt="APY Icon" /> 
                                </label>
                                <Input defaultValue={'820.543%'}/>
                            </li>
                            <li>
                                <label>
                                    $WATER Price&nbsp;
                                    <img src="./icon_price.png" alt="Price Icon" /> 
                                </label>
                                <Input defaultValue={'$194.00'}/>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Treasury;