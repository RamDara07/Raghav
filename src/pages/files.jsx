import React from 'react';
import Header from '../component/headerAfterLogin';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FileTile from '../component/fileTile';
import { useState } from 'react';

const demoData = [{
    firstName: 'Jhon',
    lastName: 'lark',
    uploadTime: new Date().toISOString(),
    updateTime: new Date().toISOString(),
    description: 'Important file',
    url: 'http://abcd.com/file'
}, {
    firstName: 'Jhon',
    lastName: 'lark',
    uploadTime: new Date().toISOString(),
    updateTime: new Date().toISOString(),
    description: 'Important file',
    url: 'http://abcd.com/file'
}];

const Files = () => {
    const [files, setFile] = useState(demoData);
    console.log({ demoData });
    return <>
        <Header />
        <Container>
            <Row style={{ border: "1px solid" }}>
                <Col>First Name</Col>
                <Col>Last Name</Col>
                <Col>Upload Time</Col>
                <Col>Update Time</Col>
                <Col>Description</Col>
                <Col>download</Col>
                <Col>Update</Col>
                <Col>Delete</Col>
            </Row>
            {demoData.map((file, i) => (
                <Row key={file.firstName + file.updateTime + i} style={{ border: "1px solid" }}>
                    <Col>{file.firstName}</Col>
                    <Col>{file.lastName}</Col>
                    <Col>{file.uploadTime}</Col>
                    <Col>{file.updateTime}</Col>
                    <Col>{file.description}</Col>
                    <Col><a href={file.url} download>download</a></Col>
                    <Col><Button variant="secondary" >Update</Button></Col>
                    <Col><Button variant="danger" >Delete</Button></Col>
                </Row>
            ))}
        </Container>
    </>
};

export default Files;
