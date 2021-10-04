import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import AboutElements from './AboutElements';
import Ourmission from './Ourmission';

const About = () => {
    const [aboutUs, setAboutUs] = useState([]);
    const [missions, setMissions] = useState([])

    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setAboutUs(data.aboutus))
    }, []);

    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setMissions(data.ourmission))
    }, []);
    return (
        <>
            <div className="page-banner">
                <Container>
                    <Row>
                        <Col>
                            <h2>About us</h2>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="about-content">
                <Container>
                    <Row xs={1} md={2} className="g-4  align-items-center">
                        {
                            aboutUs.length === 0 ? <div className="preloader"><Spinner animation="grow" variant="primary" /></div> :
                                aboutUs.map(aboutElm => <AboutElements
                                    propsAboutElements={aboutElm}
                                    key={aboutElm.id}
                                ></AboutElements>)
                        }
                    </Row>
                </Container>
            </div>
            <div className="about-content ourmission">
                <Container>
                    <Row xs={1} md={2} className="g-4 align-items-center">
                        {
                            missions.map(mission => <Ourmission
                                propsMission={mission}
                                key={mission.id}
                            ></Ourmission>)
                        }
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default About;