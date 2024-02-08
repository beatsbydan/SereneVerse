import React, { useState, useEffect } from 'react';
import logo from '../../Assets/images/logo-green.svg'
import './LazyImage.css'

const LazyImage:React.FC<{src: string, alt: string}> = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = props.src;
        img.onload = () => setLoaded(true);

        return () => {
            setLoaded(false)
        };
    }, [props.src])

    return (
        <img
            className={loaded ? 'lazyImage animate' : 'lazyImage'}
            src={loaded ? props.src : logo}
            alt={props.alt}
        />
    );
};

export default LazyImage;
