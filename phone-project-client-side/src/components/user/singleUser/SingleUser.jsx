import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleUser = () => {
    const singeUser = useLoaderData();
    console.log(singeUser)
    return (
        <div>
            <h2>{singeUser.name}</h2>
            <h3>Email: {singeUser.email}</h3>
        </div>
    );
};

export default SingleUser;