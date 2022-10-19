import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/HomePage';
import PageNotFound from './pages/NotFound';
import Login from './pages/Signin';
import Signup from './pages/Registration';
import AllFiles from './pages/AllFiles';
import FilesUpload from './pages/UploadFile';
import FilesUpdate from './pages/FileUpdatePage';

const RouterContent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/files" element={<AllFiles />} />
            <Route path="/files/upload" element={<FilesUpload />} />
            <Route path="/files/:id" element={<FilesUpdate />} />
            <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
    </Router>
);

export default RouterContent;