import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 my-10'>
                <div className='col-span-3'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;