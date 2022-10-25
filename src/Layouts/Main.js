import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='grid grid-cols-8'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;