'use client';
import React, { useContext } from 'react';
import { authData } from '@/context/login/context';

const HeaderSec = () => {
    const data = useContext(authData);

    if (!data) {
        return <p>Something went wrong!</p>; // Better to return a JSX element
    }

    console.log(data);

    const handelUpdate = () => {
        if (data.update) {
            data.update({ isLogin: false });
            data.update({username:"bilal"});
        }
    };

    return (
        <div>
            <h1>Header</h1>
            <p>{data?.isLogin ? "Logged In" : "Logged Out"}</p>
            <p>Username: {data.username}</p>
            <button onClick={handelUpdate}>
                Update UI
            </button>
        </div>
    );
};

export default HeaderSec;
