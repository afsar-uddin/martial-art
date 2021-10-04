import React from 'react';
import { Col } from 'react-bootstrap';

const OfficeAddress = (props) => {
    const { title, address, pointer } = props.PropsOfficeAddress;
    return (
        <Col>
            <div>
                <img src={pointer} alt={title} />
                <h3>{title}</h3>
                <p>{address}</p>
            </div>
        </Col>
    );
};

export default OfficeAddress;