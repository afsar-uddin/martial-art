import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServicesHome = (props) => {
    const { title, cover, price } = props.propsServicesHome
    return (
        <Col>
            <Card className="single-service">
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Tution fee ${price} monthly</h5>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServicesHome;