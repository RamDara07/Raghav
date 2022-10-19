import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import FileRow from '../component/FileRow';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from '../config';
import { TableHead } from '../component/TableHead';


const AllFiles = () => {
    const [files, setFile] = useState();
    const navigate = useNavigate();

    const signout = () => {
        window.localStorage.removeItem("userToken");
        navigate("/");
    }

    const fetchFiles = () => {
        axios.get(`${config.BASE_URL}/files`, {
            headers: {
                authorization: localStorage.getItem('userToken')
            }
        })
            .then(function (response) {
                setFile(response.data);
            })
            .catch(function (error) {

                console.log(error);
            });
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const firstName = localStorage.getItem('user');
    const admin = localStorage.getItem('admin');
    return (
        <div style={{ padding: "24px 0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "24px 0px" }}>
                <div>
                    <h4>Welcome, {firstName}</h4>
                    <p>{admin === 'true' ? 'You Can Manage files of all users' : ''} </p>
                </div>
                <div>
                    <Button style={{ margin: "0px 12px" }} onClick={() => { navigate("/files/upload") }}><b>Upload</b></Button>
                    <Button onClick={signout}><b>SignOut</b></Button>
                </div>
            </div>
            <Table striped bordered hover style={{ background: "antiquewhite" }}>
                <TableHead />
                <tbody>
                    {
                        files?.map((file, i) => (
                            <FileRow
                                key={file.firstname + file.updateTime + i}
                                id={file.id}
                                firstname={file.firstname}
                                lastname={file.lastname}
                                uploadTime={file.created_at}
                                updateTime={file.updated_at}
                                description={file.description}
                                url={file.url}
                                getFiles={fetchFiles}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default AllFiles;
