import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FileTile = ({ id, firstname, lastname, uploadTime, updateTime, description, url, getFiles }) => {

    const navigate = useNavigate();

    const deleteFile = () => {
        axios.delete(`http://localhost:8000/files/${id}`, {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                console.log(response);
                getFiles();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <tr style={{ border: "1px solid" }}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{uploadTime}</td>
            <td>{updateTime}</td>
            <td>{description}</td>
            <td><a href={url} download>download</a></td>
            <td><Button variant="danger" onClick={() => {
                navigate(`/files/${id}`, { state: { id, description, name: url } });
            }}>Update</Button></td>
            <td><Button variant="danger" onClick={deleteFile}>Delete</Button></td>
        </tr>
    );
}

export default FileTile;