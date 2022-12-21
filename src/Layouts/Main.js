import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* Layouts */}
            <div className='grid lg:grid-cols-12 my-8 mx-6'>
                <div className='lg:col-span-3'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='lg:col-span-9  '>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;