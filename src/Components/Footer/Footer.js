import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo-transparent.png'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row md={3} className="g-4">
                    <Col>
                        <div className="single-footer">
                            <Link to="/">
                                <img src={Logo} />
                                <span>Banglar Martial Art</span>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-footer">
                            <h3>Quick Link</h3>
                            <nav>
                                <Link exact to="/">Home</Link>
                                <Link exact to="/servicesall">Services</Link>
                                <Link exact to="/aboutus">About us</Link>
                                <Link exact to="/contact">Contact us</Link>
                            </nav>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-footer social">
                            <h3>social link</h3>
                            <Link to="#">
                                <FaFacebookF />
                            </Link>
                            <Link to="#">
                                <FaTwitter />
                            </Link>
                            <Link to="#">
                                <FaLinkedin />
                            </Link>
                            <Link to="#">
                                <FaInstagramSquare />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;