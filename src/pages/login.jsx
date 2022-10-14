
import { useState } from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';
import Header from "../component/header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        window.localStorage.setItem('userToken', 'acbce');
        navigate('/files');
    }

    return (<>
        <Header />
        <Container><Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"
                    value={inputs.email || ""}
                    onChange={handleChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"
                    value={inputs.password || ""}
                    onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
        </Container>
    </>
    )
}
export default MyForm;