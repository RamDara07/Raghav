import React from 'react';
import Col from 'react-bootstrap/Col';

const Column = ({ children }) => {
    return (
        <Col style={{ border: "1px solid" }}>{children}</Col>
    );
}

export default Column;