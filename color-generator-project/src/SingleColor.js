import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import rgbToHex from './util';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    //console.log(bcg);
    const hex = rgbToHex(...rgb);
    //console.log(hex);
    const hexValue = `#${hexColor}`;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);
    if (index)
        return (
            <article
                className={`color ${index > 10 && 'color-light'}`}
                style={{ backgroundColor: `rgb(${bcg})` }}
                onClick={() => {
                    setAlert(true);
                    navigator.clipboard.writeText(hexValue);
                }}
            >
                <p className="percent-value">{weight}%</p>
                {/* <p className="color-value">#{hex}</p> */}
                <p className="color-value">#{hexColor}</p>
                {alert && <p className="alert">Copied To Clipboard</p>}
            </article>
        );
};

export default SingleColor;
