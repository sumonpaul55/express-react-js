import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            {
                user.map((user) => <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Users;