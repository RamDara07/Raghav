import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dateTime } from '../utils';

const FileTile = ({ id, firstname, lastname, uploadTime, updateTime, description, url, getFiles }) => {

    const navigate = useNavigate();

    const removeFile = () => {
        axios.delete(`http://localhost:8000/files/${id}`, {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                getFiles();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <tr style={{ border: "1px solid" }}>
            <td>{firstname} {lastname}</td>
            <td>{dateTime(uploadTime)}</td>
            <td>{dateTime(updateTime)}</td>
            <td>{description}</td>
            <td><a href={url} download>download</a></td>
            <td><Button variant="danger" onClick={() => {
                navigate(`/files/${id}`, { state: { id, description, name: url } });
            }}>Update</Button></td>
            <td><Button variant="danger" onClick={removeFile}>Remove</Button></td>
        </tr>
    );
}

export default FileTile;