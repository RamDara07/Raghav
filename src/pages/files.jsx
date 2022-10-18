import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import FileTile from '../component/fileTile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Files = () => {
    const [files, setFile] = useState();
    const navigate = useNavigate();

    const getFiles = () => {
        axios.get('http://localhost:8000/files', {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                // handle success
                console.log(response);
                setFile(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    useEffect(() => {
        getFiles();
    }, []);

    const logout = () => {
        window.localStorage.removeItem("userToken");
        navigate("/");
    }

    const userName = localStorage.getItem('user');
    return (
        <div style={{ padding: "24px 0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "24px 0px" }}>
                <div>
                    <h3>Hello, {userName}</h3>
                </div>
                <div>
                    <Button style={{ margin: "0px 12px" }} onClick={() => { navigate("/files/upload") }}><b>Upload</b></Button>
                    <Button onClick={logout}><b>Logout</b></Button>
                </div>
            </div>
            <Table striped bordered hover>
                <thead style={{ border: "1px solid", fontWeight: "bold" }}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Upload Time</th>
                        <th>Update Time</th>
                        <th>Description</th>
                        <th>Download</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        files?.map((file, i) => (
                            <FileTile
                                key={file.firstname + file.updateTime + i}
                                id={file.id}
                                firstname={file.firstname}
                                lastname={file.lastname}
                                uploadTime={file.created_at}
                                updateTime={file.updated_at}
                                description={file.description}
                                url={file.url}
                                getFiles={getFiles}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default Files;
