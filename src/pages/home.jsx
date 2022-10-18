import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();
    const signup = () => {
        navigate('/signup');
    }
    const login = () => {
        navigate('/login');
    }
    return (
        <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center' }}>
            <Row>
                <Col>
                    <div style={{ textAlign: 'left' }}>
                        <h2>
                            Why Cloud Storage ?
                        </h2>
                        <h3> If you're looking for a safe and reliable way to store your important files, then you should consider using
                            cloud storage. Cloud storage is an effective way to protect your files from being lost if something happens to
                            the device they are stored on. Plus, it's a great way to share files with others without having to worry about
                            email attachments or file size limits.
                        </h3>
                        <Button variant="primary" style={{ padding: '12px', margin: '12px' }} onClick={signup}><h4>Sign Up</h4></Button>
                        <Button variant="info" style={{ padding: '12px', margin: '12px' }} onClick={login}><h4>Login</h4></Button>
                    </div>
                </Col>
                <Col><Image src='../../cloud-img-bg.png' fluid style={{ height: '100%' }} /></Col>
            </Row>
        </div>);
};

export default Home;
