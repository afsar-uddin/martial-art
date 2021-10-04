import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <div className="header-info">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                                <span>Banglar Martial Art</span>
                            </Link>

                        </div>
                        <nav>
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                            <NavLink activeClassName="active" exact to="/servicesall">Services</NavLink>
                        </nav>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Header;