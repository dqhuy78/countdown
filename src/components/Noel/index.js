import React from 'react';

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';

const Noel = () => {

    const countdown = useCountDownHook(new Date(2019, 11, 24));

    return (
        <div className="noel">
            <p>Days: {countdown.days}</p>
            <p>Hours: {countdown.hours}</p>
            <p>Minutes: {countdown.minutes}</p>
            <p>Seconds: {countdown.seconds}</p>
        </div>
    )
}

export default Noel;
