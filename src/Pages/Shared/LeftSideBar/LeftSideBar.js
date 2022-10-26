import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://learning-endless-server-a10.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='border'>
            <h1 className='text-xl font-semibold' >Categories</h1>
            {
                categories.map(category => <p key={category.id} className='my-2' ><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideBar;