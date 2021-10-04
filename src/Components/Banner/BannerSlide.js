import React from 'react';

const BannerSlide = (props) => {
    const { title, cover, dsc } = props.bannerSlide
    return (
        <div className="banner-slide">
            <img src={cover} alt={title} />
            <div className="banner-caption">
                <h2>{title}</h2>
                <p>{dsc}</p>
            </div>
        </div>
    );
};

export default BannerSlide;