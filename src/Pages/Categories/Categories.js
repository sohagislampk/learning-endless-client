import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Categories = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h1 className='text-xl font-semibold mb-4 text-center'>Total Course : {courseCategory.length}</h1>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    courseCategory.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Categories;