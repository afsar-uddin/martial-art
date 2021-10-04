import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import OfficeAddress from './OfficeAddress';
import './Contact.css'

const Contact = () => {
    const [addresses, setAddress] = useState([])
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setAddress(data.contactus))
    }, [])
    return (
        <>
            <div className="page-banner">
                <Container>
                    <Row>
                        <Col>
                            <h2>Contact us</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="contact-us section-gap contact-address">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            addresses.length === 0 ? <div className="preloader"><Spinner animation="grow" variant="primary" /></div> :
                                addresses.map(address => <OfficeAddress
                                    PropsOfficeAddress={address}
                                    key={address.id}
                                ></OfficeAddress>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Contact;