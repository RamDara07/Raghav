import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import PageNotFound from './pages/notFound';
import Login from './pages/login';
import Signup from './pages/signup';
import Files from './pages/files';
import FilesUpload from './pages/upload';
import FilesUpdate from './pages/filesUpdate';

const RouterContent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/files" element={<Files />} />
            <Route path="/files/upload" element={<FilesUpload />} />
            <Route path="/files/:id" element={<FilesUpdate />} />
            <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
    </Router>
);

export default RouterContent;