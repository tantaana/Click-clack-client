import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineBarcode } from 'react-icons/ai'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import NavShop from './NavShop/NavShop';
import NavBlog from './NavBlog/NavBlog';

const Navbar2 = () => {

    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? '#9ca3af' : '',
        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };
    return (
        <div className='py-8 px-10 grid grid-cols-3'>
            <div className='flex justify-center'>
                <Link to='/' className='hover:scale-105 hover:ease-in-out hover:duration-300 text-3xl xl:text-4xl'>
                    <h2 className='text-center font-bold tracking-widest uppercase'>Click clack</h2></Link>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <NavLink to='/' style={activeLinks}><h2 className='text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>Home</h2></NavLink>

                <NavShop />

                <NavBlog />

                <NavLink to='/about' style={activeLinks}><h2 className='text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>About</h2></NavLink>

                <NavLink to='/contact' style={activeLinks}><h2 className='text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>Contact</h2></NavLink>
            </div>
        </div>
    );
};

export default Navbar2;