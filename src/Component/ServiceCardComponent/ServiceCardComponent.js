import React from 'react';

const ServiceCardComponent = ({service}) => {
    const {img, name} = service
    console.log(service)
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <img className='w-[64px]' src={img} alt="Category Images"/>
                </div>
                <div>
                    <h3 className='font-bold text-xl mt-5 mb-7 lg:mb-0'>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardComponent;