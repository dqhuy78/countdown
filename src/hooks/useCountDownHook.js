import React, { useState, useEffect } from 'react';

export default function useCountDownHook(toDate) {

    const [currentdate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {
        days: Math.round(Math.abs(Math.floor(toDate - currentdate) / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor(((toDate - currentdate) / 1000 / 60 / 60) % 24 )).padStart(2, 0),
        minutes: String(Math.floor(((toDate - currentdate) / 1000 / 60) % 60)).padStart(2, 0),
        seconds: String(Math.floor((toDate - currentdate) / 1000) % 60).padStart(2, 0),
    };
};
