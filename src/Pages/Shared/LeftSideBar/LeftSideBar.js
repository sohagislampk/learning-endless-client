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
        <div className='text-center'>
            <h1 className='text-xl font-semibold mb-4' >Categories</h1>
            <div className='btn-group btn-group-vertical gap-2'>
                {
                    categories.map(category => <button key={category.id} className='btn w-full' ><Link to={`/category/${category.id}`}>{category.name}</Link></button>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;