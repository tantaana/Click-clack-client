import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AllTitle from '../../../Hooks/AllTitle/AllTitle';

const Home = () => {
    AllTitle('Home')
    return (
        <div>
            <h2>hello</h2>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
};

export default Home;