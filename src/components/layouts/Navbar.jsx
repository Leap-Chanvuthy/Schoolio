import { useState } from 'react';
import {BiUpload} from 'react-icons/bi';
import {HiX} from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
    const [openNav , setOpenNav] = useState(false);
    const toggleNav = () => {
        setOpenNav(!openNav);
    }
    return ( 
        <div className="bg-secondary p-10  font-bold text-gray-400">
            <div className="responsive flex justify-between items-center">
                <div>
                    <h2>Logo</h2>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <h4>Login</h4>
                    <button className='flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-pink-500 px-2 py-1 rounded-sm text-white'>
                        <span><BiUpload/></span>
                        <span>Upload</span>
                    </button>
                </div>
            </div>
            {/* Appear in small screen */}
            <div className='flex justify-between items-center text-xl font-bold lg:hidden md:hidden'>
                <div>
                    <h2>Logo</h2>
                </div>
                <div>
                    <button className='flex justify-center items-center gap-2 px-2 rounded-sm text-gray-400'>
                        <span><BiUpload/></span>
                        <span>Upload</span>
                    </button>
                </div>
                {openNav ? <HiX className='cursor-pointer' onClick={toggleNav}/> : <GiHamburgerMenu className='cursor-pointer' onClick={toggleNav}/>}
            </div>
            <div className={`${openNav ? 'flex' : 'hidden' }  lg:hidden md:hidden justify-center items-center gap-6 py-10`}>
                <div>
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <h4>Login</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;