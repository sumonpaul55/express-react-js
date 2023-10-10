import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink>Home</NavLink>
            <NavLink to="/user">User</NavLink>
        </div>
    );
};

export default Header;