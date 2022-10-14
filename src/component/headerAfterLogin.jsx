import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        window.localStorage.removeItem('userToken');
        navigate('/');
    }
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo">Manage files with us</a>
                <div className="header-right">
                    <a className="active" href="/files">Home</a>
                    <a className="active" href="/files/upload">Upload</a>
                    <a className='active' onClick={logout}>Logout</a>
                </div>
            </div>
        </div >
    );
}

export default Header;