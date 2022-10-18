
import { useState } from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { isEmpty } from "../util";

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/login', {
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email,
            password: inputs.password
        })
            .then(function (response) {
                if (response.status == 200 && !isEmpty(response.data.jwtToken)) {
                    console.log(response);
                    setInputs({});
                    window.localStorage.setItem('userToken', response.data.jwtToken);
                    window.localStorage.setItem('user', response.data.user.firstname);
                    navigate('/files');
                    setError();
                }
                setError(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
                setError(error.response.data.message);
            });
    }

    return (
        <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center', fontWeight: 'bold' }}>
            <div className="box">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={inputs.email || ""} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={inputs.password || ""} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    <b>Login</b>
                </Button>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        </div>
    )
}
export default MyForm;