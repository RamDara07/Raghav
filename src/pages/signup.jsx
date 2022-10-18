
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        console.log(inputs);
        axios.post('http://localhost:8000/signup', {
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email,
            password: inputs.password
        })
            .then(function (response) {
                console.log(response);
                setInputs({});
                navigate('/login');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center', fontWeight: 'bold' }}>
            <div className="box">
                <Form.Group className="mb-3" controlId="formfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="Enter first name" value={inputs.firstname || ""} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formlastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Enter last name" value={inputs.lastname || ""} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={inputs.email || ""} onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={inputs.password || ""} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    <b> Signup</b>
                </Button>
            </div>
        </div>
    )
}
export default MyForm;