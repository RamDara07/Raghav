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
                <Col><Image src='../../cloud-main-img.jpeg' fluid style={{ height: '100%' }} /></Col>
                <Col>
                    <div style={{ textAlign: 'left' }}>
                        <h3>
                            Cloud Storage is Important
                        </h3>
                        <h3> There are many reasons to use cloud storage. Some of the most common reasons include:<br />
                            * Access files from anywhere <br />
                            * Share files easily<br />
                            * Backup files<br />
                            * Save space on your computer   <br />                     </h3>
                        <Button variant="primary" style={{ padding: '12px', margin: '12px' }} onClick={signup}>Register Here</Button>
                        <Button variant="primary" style={{ padding: '12px', margin: '12px' }} onClick={login}>Already a member</Button>
                    </div>
                </Col>
            </Row>
        </div>);
};

export default Home;
