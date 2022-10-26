import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Categories from '../../Pages/Categories/Categories';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Profile from '../../Pages/Profile/Profile';
import Register from '../../Pages/Register/Register';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://learning-endless-server-a10.vercel.app/courses')
        },
        {
            path: '/category/:id',
            element: <Categories></Categories>,
            loader: ({ params }) => fetch(`https://learning-endless-server-a10.vercel.app/category/${params.id}`)
        },
        {
            path: '/courses/:id',
            element: <PrivateRouter><CourseDetails></CourseDetails></PrivateRouter>,
            loader: ({ params }) => fetch(`https://learning-endless-server-a10.vercel.app/courses/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/profile',
            element: <PrivateRouter><Profile></Profile></PrivateRouter>
        }
    ]
}])