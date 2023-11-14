import React, { useState } from 'react';
import {RiUpload2Fill} from 'react-icons/ri';
import {LuHome} from "react-icons/lu";
import {BsPatchExclamation} from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {auth} from "../../config/firebase";
import {signOut} from 'firebase/auth';

const Navbar = () => {
    const avatar = auth.currentUser.email ;
    const photoURI = auth.currentUser.photoURL;
    const user = auth.currentUser;

    const logout = async () => {
        try {
            await signOut(auth);
        }
        catch (error){
            console.log(error);
        }
    }

    const [avatarDropDown , setAvatarDropDown] = useState(true);
    const openDropDown = () => {
        setAvatarDropDown(!avatarDropDown);
    }

    const [openNavbar , setOpenNavbar] = useState(true);
    const toggleNav = () => {
        setOpenNavbar(!openNavbar);
    }

  return (
    <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className='text-pink-500 font-bold text-2xl'>Schoolio</span>
            </a>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={openDropDown}  type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={photoURI}  />
            </button>
            {/* Dropdown menu */}
            <div className={`${avatarDropDown ? 'hidden' : 'block'} absolute z-50 right-5 top-10  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}>
                <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Welcome</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{avatar}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Your Books</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logout}>Sign out</a>
                </li>
                </ul>
            </div>
            <button onClick={toggleNav} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            </div>
            <div className={`${openNavbar ? 'hidden' : 'block'} items-center justify-between  w-full md:flex md:w-auto md:order-1 text-gray-400" id="navbar-user`}>
                <ul className="flex flex-col items-center text-gray-400 font-bold p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li className='flex justify-center gap-1 items-center hover:text-pink-600'>
                        <LuHome/>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='flex justify-center gap-1 items-center hover:text-pink-600'>
                        <BsPatchExclamation/>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="flex justify-center gap-1 items-center hover:text-pink-600">
                        <RiUpload2Fill/>
                        <Link to='/upload'>Upload</Link>
                    </li>
                    <li>
                        <h4 className='font-bold lg:md:block sm:hidden'>welcome , {avatar}</h4>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;
