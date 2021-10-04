import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'
import BannerSlide from './BannerSlide';

const Banner = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('./martialart.json')
            .then(res => res.json())
            .then(data => setBanners(data.banner))
    }, [])
    return (
        <Container>
            <Row>
                <div className="banner-area">
                    {
                        banners.map(banner => <BannerSlide
                            key={banner.id}
                            bannerSlide={banner}
                        ></BannerSlide>)
                    }
                </div>
            </Row>
        </Container>
    );
};

export default Banner;