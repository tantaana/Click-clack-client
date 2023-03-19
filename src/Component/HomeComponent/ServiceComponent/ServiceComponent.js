import React, { useEffect, useState } from 'react';
import ServiceData from "../../../data/ServiceData"
import ServiceCardComponent from '../../ServiceCardComponent/ServiceCardComponent';

const ServiceComponent = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 justify-around items-center mt-12 mb-12 px-14 text-center'>
            {
                ServiceData?.map(service => <ServiceCardComponent key={service.id} service={service}/>)
            }
        </div>
    );
};

export default ServiceComponent;