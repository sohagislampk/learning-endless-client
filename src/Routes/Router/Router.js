import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Categories from '../../Pages/Categories/Categories';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
        },
        {
            path: '/category/:id',
            element: <Categories></Categories>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}])