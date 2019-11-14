import React, { useState } from 'react';
import Snowfall from 'react-snowfall'

import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';
import mp3Sound from './x-mas.mp3';

const Noel = () => {
    const countdown = useCountDownHook(new Date(2019, 11, 24));
    const [flakeCount] = useState(document.documentElement.clientWidth / 5);

    return (
        <div className="noel">
            <Snowfall
                color="white"
                snowflakeCount={flakeCount}
            />
            <div className="noel__backdrop" />
            <h1>To Christmas</h1>
            <div className="noel__wraper">
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
            <embed src={mp3Sound} width={0} height={0} loop={true} />
        </div>
    )
}

export default Noel;
