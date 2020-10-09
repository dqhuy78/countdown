import React from 'react';

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';
import mp3Sound from './lunar.mp3';

const LunarNewYear = () => {
    const countdown = useCountDownHook(new Date(2021, 1, 12));

    return (
        <div className="lunar">
            <div className="before"></div>
            <div className="after"></div>
            <div className="lunar__backdrop" />
            <h1>To Lunar New Year</h1>
            <div className="lunar__wrapper">
                <p className="lunar__day">
                    <span>{countdown.days}</span>
                    <span>days</span>
                </p>
                <p className="lunar__hour">
                    <span>{countdown.hours}</span>
                    <span>hours</span>
                </p>
                <p className="lunar__minute">
                    <span>{countdown.minutes}</span>
                    <span>minutes</span>
                </p>
                <p className="lunar__second">
                    <span>{countdown.seconds}</span>
                    <span>seconds</span>
                </p>
            </div>
            <audio autoPlay>
                <source src={mp3Sound} type="audio/mp3" />
            </audio>
            <div className="before"></div>
            <div className="after"></div>
        </div>
    )
}

export default LunarNewYear;
