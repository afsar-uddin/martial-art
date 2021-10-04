import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ServicesAllItem = (props) => {
    const { title, cover, price } = props.propsServicesAllItem
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

export default ServicesAllItem;