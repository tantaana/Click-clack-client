import React from 'react';
import BannerSection from '../../../Component/HomeComponent/BannerComponent/BannerSection';
import ServiceComponent from '../../../Component/HomeComponent/ServiceComponent/ServiceComponent';
import AllTitle from '../../../Hooks/AllTitle/AllTitle';

const Home = () => {
    AllTitle('Home')

    return (
        <div>
            <BannerSection/>
            <ServiceComponent/>
        </div>
    );
};

export default Home;