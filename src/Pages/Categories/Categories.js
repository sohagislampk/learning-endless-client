import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Categories = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h1>Total Course : {courseCategory.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
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