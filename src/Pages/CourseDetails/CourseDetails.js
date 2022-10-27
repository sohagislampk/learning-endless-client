import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, photo_url, description, _id } = courseDetails;
    return (
        <div>
            <img src={photo_url} alt="" />
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <h3>Description : {description}</h3>
            <Link to={`/checkout/${_id}`}><button className='btn btn-primary'>Get Premium Access</button></Link>
        </div>
    );
};

export default CourseDetails;