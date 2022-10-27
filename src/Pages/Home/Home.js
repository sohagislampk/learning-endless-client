import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1 className='text-xl font-semibold mb-4 text-center'>All Courses</h1>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;