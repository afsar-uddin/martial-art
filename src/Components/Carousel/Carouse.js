import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CarouselSlider from './CarouselSlider'
import { Carousel } from 'reactstrap';

const Carouse = () => {
    const [sliders, setSliders] = useState([])
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setSliders(data.carousel))
    }, [])
    return (
        <div className="slider-area">
            hi
        </div>
    );
};

export default Carouse;