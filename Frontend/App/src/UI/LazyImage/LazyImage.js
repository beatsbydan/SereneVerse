import React, { useState, useEffect } from 'react';
import logo from '../../Assets/images/logo-green.svg'
import './LazyImage.css'

const LazyImage = ({ src, alt}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);

        return () => {
        img.onload = null;
        };
    }, [src]);

    return (
        <img
            className='lazyImage'
            src={loaded ? src : logo}
            alt={alt}
        />
    );
};

export default LazyImage;
