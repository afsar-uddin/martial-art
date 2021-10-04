import React from 'react';
import './About.css'

const AboutElements = (props) => {
    const { title, dsc, img } = props.propsAboutElements
    return (
        <>
            <div>
                <img src={img} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{dsc}</p>
            </div>
        </>
    );
};

export default AboutElements;