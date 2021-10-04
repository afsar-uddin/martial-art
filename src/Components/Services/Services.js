import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesHome from './ServicesHome'
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setServices(data.servicesHome))
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <div className="sec-title">
                        <h2>Our core Services</h2>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <ServicesHome
                        propsServicesHome={service}
                    ></ServicesHome>)
                }
            </Row>
            <Col className="view-more">
                <Link className="btn-link" to="/servicesall">View more services</Link>
            </Col>
        </Container>
    );
};

export default Services;