import React from 'react';
import { Badge } from 'react-bootstrap';

const ProjectLogo = () => {
    return (
        <Badge bg="info" style={{ paddingTop: "12px" }}>
            <h3 style={{ lineHeight: "0.5" }}>Manage Files</h3>
            <p style={{ color: "black", textAlign: "right" }}>We Make it Easy</p>
        </Badge>);
};

export default ProjectLogo;