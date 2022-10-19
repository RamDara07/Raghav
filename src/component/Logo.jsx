import React from 'react';
import { Badge, Image } from 'react-bootstrap';


const ProjectLogo = () => {
    return (
        <Badge bg="info" style={{ paddingTop: "12px" }}>
            <Image src='../../clouds-icon.png' />
            <h3 style={{ lineHeight: "0.5" }}>Manage Files</h3>
        </Badge>);
};

export default ProjectLogo;