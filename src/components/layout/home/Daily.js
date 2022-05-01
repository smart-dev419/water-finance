import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

const Daily = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return(
        <div id="daily">
            <Container>
                <Row>
                    <Col md="7">
                        <h1>Daily Reward Yielding Protocol</h1>
                        <p>
                            <div>
                                <span>Built on</span> <img src="./icon_built.png" alt="Built Icon" className='built_img'/> Binance Smart Chain
                            </div>
                            <div>|</div>
                            <div>
                                <span>Team KYC by</span> <a href='https://cryptokyc.org/waterfinance'><img src="./icon_kyc.png" alt="KYC Icon" className='kyc_img'/></a>
                            </div>
                        </p>
                        <div className='daily_link'>
                            <NavLink href={'/app'} className="app_btn" target="_blank">
                                Open App
                            </NavLink>
                            <NavLink href="https://docs.waterfinance.io">
                                Docs&nbsp;
                                <img src="./icon_docs.png" alt="Docs Icon" />
                            </NavLink>
                        </div>
                    </Col>

                    <Col md="5" className='daily_img'>
                        <video
                            style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                            playsInline
                            loop
                            muted
                            alt="All the devices"
                            src="./dail_bg_white.mp4"
                            ref={videoEl}
                        />
                        <img src="./daily_bg_white.gif" alt="Daily Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Daily;