import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

const Daily = () => {

    return(
        <div id="daily">
            <Container>
                <Row>
                    <Col md="7">
                        <h1>Daily Reward Yielding Protocol</h1>
                        <p>Built on <img src="./icon_built.png" alt="Built Icon" /> Binance Smart Chain</p>
                        <div className='daily_link'>
                            <NavLink href={'/app'} className="app_btn" target="_blank">
                                Open App
                            </NavLink>
                            <NavLink href="/">
                                Docs&nbsp;
                                <img src="./icon_docs.png" alt="Docs Icon" />
                            </NavLink>
                        </div>
                    </Col>

                    <Col md="5" className='text-end'>
                        <img src="./daily_bg.png" alt="Daily Image1"/> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Daily;