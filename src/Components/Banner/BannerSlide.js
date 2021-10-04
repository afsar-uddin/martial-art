import React from 'react';
import { Link } from 'react-router-dom';

const BannerSlide = (props) => {
    const { title, cover, dsc } = props.bannerSlide
    return (
        <div className="banner-slide">
            <img src={cover} alt={title} />
            <div className="banner-caption">
                <h2>{title}</h2>
                <p>{dsc}</p>
                <Link className="btn-link" to="/">All Services</Link>
            </div>
        </div>
    );
};

export default BannerSlide;