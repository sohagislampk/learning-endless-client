import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, photo_url, description } = courseDetails;
    return (
        <div>
            <img src={photo_url} alt="" />
            <h1>{title}</h1>
            <h3>Description : {description}</h3>
        </div>
    );
};

export default CourseDetails;