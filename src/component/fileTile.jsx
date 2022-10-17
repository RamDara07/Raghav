import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const FileTile = ({ id, firstName, lastName, uploadTime, updateTime, description, url }) => {

    const navigate = useNavigate();

    const deleteFile = () => {

    }
    return (
        <tr style={{ border: "1px solid" }}>
            <td>{firstName}</td>
            <td>{lastName}</td>
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