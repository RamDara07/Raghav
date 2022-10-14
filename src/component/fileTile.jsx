import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FileTile = ({ key, firstName, lastName, uploadTime, updateTime, description, url }) => {
    const deleteFile = () => {

    }
    return (
        <Row key={firstName + updateTime + key}>
            <Col>{firstName}</Col>
            <Col>{lastName}</Col>
            <Col>{uploadTime}</Col>
            <Col>{updateTime}</Col>
            <Col>{description}</Col>
            <Col><a href={url} download>download</a></Col>
            <Col><Button variant="danger" onClick={deleteFile}>Update</Button></Col>
            <Col><Button variant="danger" onClick={deleteFile}>Delete</Button></Col>
        </Row>
    );
}

export default FileTile;