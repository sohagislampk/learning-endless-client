import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='text-center'>
            <h1 className='tesxt-3xl text-red-600 mt-24'>Not Found ... ! ! !</h1>
            <h2 className='text-8xl font-bold my-8'> 404</h2>
            <Link to={'/'}><button className='btn btn-warning'>Back to Home</button></Link>
        </div>
    );
};

export default Error404;