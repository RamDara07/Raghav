import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo">Manage files with us</a>
                <div className="header-right">
                    {/* <Link to="/about">About</Link> */}
                    <a className="active" href="/">Home</a>
                    <a className="active" href="/signup">Signup</a>
                    <a className="active" href="/login">login</a>
                </div>
            </div>
        </div >
    );
}

export default Header;