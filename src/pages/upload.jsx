import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AWS from 'aws-sdk'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


const FilesUpload = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    console.log(process.env);
    console.log(process.env.S3_BUCKET);
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setInputs(values => ({ ...values, 'fileName': file.name, 'fileSize': file.size }))
    }

    useEffect(() => {
        if (progress === 100) {
            uploadFileReq();
        }
    }, [progress]);

    const uploadFileReq = () => {
        axios.post('http://localhost:8000/files', {
            fileDescription: inputs.description,
            fileName: inputs.fileName,
            fileSize: inputs.fileSize
        }, {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                console.log(response);
                setInputs({});
                setShowProgress(false);
                setSelectedFile(null);
                navigate("/files")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleUpload = async (file) => {
        setShowProgress(true);
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };
        myBucket.putObject(params, (err, data) => {
            console.log({ err }, { data });
        })
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    return <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center', fontWeight: 'bold' }}>
        <div className="box">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>File description</Form.Label>
                <Form.Control type="text" placeholder="description" name="description" value={inputs.description || ""} onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File input</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} />
            </Form.Group>
            {showProgress ? (<div>File Upload Progress is {progress}%</div>)
                : <></>}
            <Button variant="primary" onClick={() => handleUpload(selectedFile)}>
                Submit
            </Button>
        </div>
    </div>
};

export default FilesUpload;
