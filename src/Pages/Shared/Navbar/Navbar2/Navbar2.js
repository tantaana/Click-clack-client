import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { RiShoppingCartFill } from 'react-icons/ri'
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
        <div className='py-8 px-10 2xl:px-20 grid grid-cols-3'>
            <div className='flex justify-start 2xl:justify-center items-center'>
                <Link to='/' className='hover:scale-105 hover:ease-in-out hover:duration-300 text-3xl xl:text-4xl'>
                    <h2 className='text-center font-bold tracking-widest uppercase'>Click clack</h2></Link>
            </div>

            <div className='flex justify-center items-center'>
                <div className="hidden lg:flex justify-center items-center gap-4 xl:gap-6 2xl:gap-8">
                    <NavLink to='/' style={activeLinks}><h2 className='text-base xl:text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>Home</h2></NavLink>

                    <NavShop />

                    <NavBlog />

                    <NavLink to='/about' style={activeLinks}><h2 className='text-base xl:text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>About</h2></NavLink>

                    <NavLink to='/contact' style={activeLinks}><h2 className='text-base xl:text-lg font-semibold tracking-widest hover:text-gray-400 hover:ease-in-out hover:duration-300 uppercase'>Contact</h2></NavLink>
                </div>
            </div>

            <div className='flex justify-end 2xl:justify-center items-center gap-6 2xl:gap-10 border border-black'>
                <h2 className='lg:hidden'>hello</h2>
                <AiOutlineHeart className='text-3xl hover:text-gray-400 hover:ease-in-out hover:duration-300' />
                <div className='flex justify-center items-center gap-2 hover:text-gray-400 hover:ease-in-out hover:duration-300'>
                    <RiShoppingCartFill className='text-3xl' />
                    <h2 className='font-semibold'>0.00 $</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;