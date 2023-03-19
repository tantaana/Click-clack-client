import { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `Click Clack | ${title}`;
    }, [title])
};

export default AllTitle;