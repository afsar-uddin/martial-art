import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <Container>
                <Row>
                    <Col>
                        <h2>Sorry, 404 Not found</h2>
                        <Link to="/">Back to home</Link>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default NotFound;