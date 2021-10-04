import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Banner = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => console.log(data.banner))
    }, [])
    return (
        <div className="slider-area">
            hi
        </div>
    );
};

export default Banner;