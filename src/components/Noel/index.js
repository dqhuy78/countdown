import React, { useState } from 'react';
import Snowfall from 'react-snowfall'

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';
import mp3Sound from './x-mas.mp3';

const getYear = () => {
    const currentYear = new Date().getFullYear();
    const thisYearXmas = new Date(currentYear, 11, 24);
    const today = new Date();

    return today > thisYearXmas ? currentYear + 1 : currentYear;
}

const Noel = () => {
    const countdown = useCountDownHook(new Date(getYear(), 11, 24));
    const [flakeCount] = useState(document.documentElement.clientWidth / 5);

    return (
        <div className="noel">
            <Snowfall
                color="white"
                snowflakeCount={flakeCount}
            />
            <div className="noel__backdrop" />
            <h1>To Christmas</h1>
            <div className="noel__wrapper">
                <p className="noel__day">
                    <span>{countdown.days}</span>
                    <span>days</span>
                </p>
                <p className="noel__hour">
                    <span>{countdown.hours}</span>
                    <span>hours</span>
                </p>
                <p className="noel__minute">
                    <span>{countdown.minutes}</span>
                    <span>minutes</span>
                </p>
                <p className="noel__second">
                    <span>{countdown.seconds}</span>
                    <span>seconds</span>
                </p>
            </div>
            <audio autoPlay hidden loop controls>
                <source src={mp3Sound} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default Noel;
