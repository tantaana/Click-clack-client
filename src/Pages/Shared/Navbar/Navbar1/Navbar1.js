import React from 'react';
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'
import { GrSearch } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <div className='hidden py-2 md:grid grid-cols-3'>

            <div className='flex md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-20 justify-center items-center text-xl'>
                <GrFacebookOption className='hover:text-gray-400 hover:ease-in-out hover:duration-200' />
                <AiOutlineTwitter className='hover:text-gray-400 hover:ease-in-out hover:duration-200' />
                <FaPinterestP className='hover:text-gray-400 hover:ease-in-out hover:duration-200' />
                <RiInstagramFill className='hover:text-gray-400 hover:ease-in-out hover:duration-200' />
                <AiFillYoutube className='hover:text-gray-400 hover:ease-in-out hover:duration-200' />
            </div>

            <div className='flex justify-center items-center gap-1'>
                <GrSearch className='font-bold text-2xl' />
                <input type="text" placeholder="Search..." className="input rounded-none border border-gray-400 input-sm w-full" />
            </div>

            <div className='flex justify-center items-center'>
                <Link to='/stores' className='flex justify-center items-center gap-2 hover:text-gray-400 hover:ease-in-out hover:duration-200'>
                    <MdLocationOn className='text-xl' />
                    <h2 className='font-bold uppercase'>Stores</h2>
                </Link>
            </div>
        </div>
    );
};

export default Navbar1;