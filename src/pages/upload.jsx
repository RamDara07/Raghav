import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import Header from '../component/headerAfterLogin';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FileTile from '../component/fileTile';
import Form from 'react-bootstrap/Form';
import AWS from 'aws-sdk'


const S3_BUCKET = 'myprojectcmpe281';
const REGION = 'us-west-1';
const ACCESS_KEY = 'AKIAZ76T44UERXII56PP';
const SECRET_ACCESS_KEY = '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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


const FilesUpload = () => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })

    }

    return <>
        <Header />
        <Container>
            <><div>Native SDK File Upload Progress is {progress}%</div>
                <Form onSubmit={() => handleUpload(selectedFile)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>File description</Form.Label>
                        <Form.Control type="text" placeholder="description" name="description"
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>File input</Form.Label>
                        <Form.Control type="file" onChange={handleFileInput} />
                    </Form.Group>

                </Form></>
            <Button variant="primary" type="submit" onClick={() => handleUpload(selectedFile)}>
                Submit
            </Button>

        </Container>
    </>
};

export default FilesUpload;
