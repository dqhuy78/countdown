import React, { useState } from 'react';

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';
import mp3Sound from './hpny.mp3';

const NewYear = () => {

    const countdown = useCountDownHook(new Date(2021, 0, 1));
    const [index, setIndex] = useState(0);


    return (
        <div className="new-year">
            <div className="new-year__bgr" style={{ left: `${index}vw` }}>
                <div className="new-year__usa-img" />
                <div className="new-year__london-img" />
                <div className="new-year__french-img" />
            </div>
            <div className="new-year__backdrop" />
            <div className="new-year__wrapper">
                <h1>To New Year</h1>
                <div className="new-year__timer">
                    <p className="new-year__day">
                        <span>{countdown.days}</span>
                        <span>days</span>
                    </p>
                    <p className="new-year__hour">
                        <span>{countdown.hours}</span>
                        <span>hours</span>
                    </p>
                    <p className="new-year__minute">
                        <span>{countdown.minutes}</span>
                        <span>minutes</span>
                    </p>
                    <p className="new-year__second">
                        <span>{countdown.seconds}</span>
                        <span>seconds</span>
                    </p>
                </div>
            </div>
            {/* <audio autoPlay>
                <source src={mp3Sound} type="audio/mp3" />
            </audio> */}
        </div>
    )
}

export default NewYear;
