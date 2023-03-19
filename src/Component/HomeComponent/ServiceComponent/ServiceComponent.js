import React, { useEffect, useState } from 'react';
import ServiceData from "../../../data/ServiceData"

const ServiceComponent = () => {
    
    return (
        <div>
            {
                ServiceData?.map(service => console.log(service))
            }
        </div>
    );
};

export default ServiceComponent;