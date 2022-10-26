import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                courses.map(course => <Course
                    key={course._id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Home;