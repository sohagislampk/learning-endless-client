import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { MdLightMode, MdNightlight } from 'react-icons/md'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => error.message);
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className='h-8 mr-2' src="learning-endless.png" alt="" />Learning Endless</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Courses</Link></li>
                        <li><a>FAQ</a></li>
                        <li><Link to={'/blog'} >Blog</Link></li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        <MdLightMode className='swap-off  w-8 h-8'></MdLightMode>
                        <MdNightlight className="swap-on  w-8 h-8" ></MdNightlight>

                    </label>
                    {user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user.photoURL} alt=""></img>
                                                :
                                                <FaUserAlt className='w-10 text-3xl'></FaUserAlt>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li><Link to={'/profile'}>{user.displayName}</Link></li>
                                    <li> <Link to={'/profile'} >Profile</Link></li>
                                    <li onClick={handleLogout}><p>Logout</p></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>

                            <Link to={'/login'} className="btn btn-primary mr-2 px-7 ">Login</Link>
                            <Link to={'/register'} className="btn btn-primary">Register</Link>

                        </>

                    }
                </div>


            </div>
        </div>
    );
};

export default Navbar;