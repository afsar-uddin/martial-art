import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './Services.css'
import ServicesAllItem from './ServicesAllItem';

const ServicesAll = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setAllServices(data.servicesAll))
    }, [])
    return (
        <>
            <div className="page-banner">
                <Container>
                    <Row>
                        <Col>
                            <h2>Our core services</h2>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="servicess-all section-gap">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            allServices.length === 0 ? <div className="preloader"><Spinner animation="grow" variant="primary" /></div> :
                                allServices.map(serviceItem => <ServicesAllItem
                                    propsServicesAllItem={serviceItem}
                                    key={serviceItem.id}
                                ></ServicesAllItem>)
                        }

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ServicesAll;