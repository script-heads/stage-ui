import { useState, useEffect } from 'react';

const RES_MIN = {
    TABLET: 768,
    MOBILE: 414,
    DESKTOP: 1024,
}

export default () => {

    const calc = () => {
        return {
            height: window.innerHeight,
            width: window.innerWidth,
            isDesktop: window.innerWidth >= RES_MIN.DESKTOP,
            isTablet: window.innerWidth < RES_MIN.DESKTOP && window.innerWidth >= RES_MIN.TABLET,
            isMobile: window.innerWidth < RES_MIN.TABLET,
            tableMinWidth: RES_MIN.TABLET,
            resolutionMobileMinimum: RES_MIN.MOBILE,
            resolutionTabletMinimum: RES_MIN.TABLET,
            resolutionDesktopMinimum: RES_MIN.DESKTOP,
            info: {
                vendor: navigator.vendor,
                name: navigator.appName,
                version: navigator.appVersion,
                language: navigator.language,
                geolocation: navigator.geolocation,
            }
        };
    }

    const [value, setValue] = useState(calc());

    useEffect(() => {
        const resize = () => {
            setValue(calc())
        }
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    });

    return value;
}