import React, { useState } from 'react';
import './style.scss';
import useCountDownHook from '../../hooks/useCountDownHook';
import { Fireworks } from 'fireworks/lib/react'

const NewYear = () => {
    const countdown = useCountDownHook(new Date(2021, 0, 1));
    let fxProps = {
        count: 6,
        interval: 1000,
        colors: [ '#4CAF50', 'white', '#6B5B95', '#D65076', '#45B8AC', '#EFC050'],
        calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth / 6) - (i + 1) * 100,
          y: 500 + Math.random() * 100 - 120 + (i === 2 ? -80 : 0)
        })
      }

    return (
        <div className="new_year">
            <Fireworks {...fxProps} />
            <div className="new_year__backdrop" />
            <h1>Happy New Year</h1>
            <div className="new_year__wrapper">
                <p className="new_year__day">
                    <span>{countdown.days}</span>
                    <span>days</span>
                </p>
                <p className="new_year__hour">
                    <span>{countdown.hours}</span>
                    <span>hours</span>
                </p>
                <p className="new_year__minute">
                    <span>{countdown.minutes}</span>
                    <span>minutes</span>
                </p>
                <p className="new_year__second">
                    <span>{countdown.seconds}</span>
                    <span>seconds</span>
                </p>
            </div>
        </div>
    )
}

export default NewYear;
