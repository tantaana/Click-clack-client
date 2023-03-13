import { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Click Clack`;
    }, [title])
};

export default AllTitle;