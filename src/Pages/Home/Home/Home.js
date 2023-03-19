import React from 'react';
import BannerSection from '../../../Component/HomeComponent/BannerSection';
import AllTitle from '../../../Hooks/AllTitle/AllTitle';

const Home = () => {
    AllTitle('Home')

    return (
        <div>
            <BannerSection/>
        </div>
    );
};

export default Home;