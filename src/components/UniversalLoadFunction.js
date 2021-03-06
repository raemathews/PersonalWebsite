import React, { useEffect, useState } from 'react';
import PageLoader from './PageLoader';

function useLoader() {
    const [isLoaded, setLoaded] = useState(false);

    const loading = () => {
        setLoaded(true)
    }

    return { isLoaded, loading };
}

function UniversalLoader(loadedComponent) {
    const {isLoaded, loading } = useLoader();

    useEffect(() => {
        loading()}, [])

    if(!isLoaded) {
        return(
            <PageLoader />
        )
    }
    else {
        return(
            {loadedComponent}
        )
    }
    
}

export default UniversalLoader;