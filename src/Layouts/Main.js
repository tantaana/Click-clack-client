import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar1 from '../Pages/Shared/Navbar/Navbar1/Navbar1';
import Navbar2 from '../Pages/Shared/Navbar/Navbar2/Navbar2';

const Main = () => {
    let location = useLocation();
    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <Outlet />

            {/* {location.pathname !== '/specialities' && <Footer></Footer>} */}
        </div>
    );
};

export default Main;