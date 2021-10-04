import React from 'react';
import './About.css'

const Ourmission = (props) => {
    const { title, dsc, img } = props.propsMission;
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{dsc}</p>
            </div>
            <div>
                <img src={img} alt={title} />
            </div>
        </>
    );
};

export default Ourmission;