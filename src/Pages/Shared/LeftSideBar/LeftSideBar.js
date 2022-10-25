import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftSideBar = () => {
    const [categories, setCategories] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='border'>
            <h1>Categories</h1>
            {
                categories.map(category => <p>{category.name}</p>)
            }
        </div>
    );
};

export default LeftSideBar;