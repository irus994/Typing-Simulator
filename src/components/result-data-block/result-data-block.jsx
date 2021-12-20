import React from 'react';
import TotalTime from "../total-time/total-time";
import Accuracy from "../accuracy/accuracy";
import SpeedTyping from "../speed-typing/speed-typing";
import RepeatButton from "../repeat-button/repeat-button";

export default function ResultDataBlock() {
    return (
        <div className="text-block__data">
            <ul className="text-block__data-list">
                <SpeedTyping/>
                <Accuracy/>
                <TotalTime/>
            </ul>
            <RepeatButton/>
        </div>
    )
};