import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Categories from '../../Pages/Categories/Categories';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/category',
            element: <Categories></Categories>
        }
    ]
}])