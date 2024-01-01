import React, { useEffect } from 'react';

import Loader from './Loader';

const ProtectedRoutes = () => {
    // const [loading, setLoading] = useState(true);

    useEffect(() => {}, []);

    return (
        <div className='routes'>
            <Loader />
        </div>
    );
};

export default ProtectedRoutes;
