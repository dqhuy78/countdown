import React from 'react';

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';

const NewYear = () => {

    const countdown = useCountDownHook(new Date(2020, 0, 1));

    return (
        <div className="new-year">
            <p>Days: {countdown.days}</p>
            <p>Hours: {countdown.hours}</p>
            <p>Minutes: {countdown.minutes}</p>
            <p>Seconds: {countdown.seconds}</p>
        </div>
    )
}

export default NewYear;
