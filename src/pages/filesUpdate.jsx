import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';




const FilesUpload = () => {
    const { state } = useLocation();
    const { id, description, name } = state;

    const [inputs, setInputs] = useState({ description, id, name });
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleUpload = () => {
        axios.put(`http://localhost:8000/files/${inputs.id}`, {
            fileDescription: inputs.description,
        }, {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                console.log(response);
                setInputs({});
                navigate("/files")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center', fontWeight: 'bold' }}>
        <div className="box">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>File description</Form.Label>
                <Form.Control type="text" placeholder="description" name="description" value={inputs.description || ""} onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File Name</Form.Label>
                <Form.Control type="text" disabled value={inputs.name || ""} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpload}>
                Update
            </Button>
        </div>
    </div >
};

export default FilesUpload;
