import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";


export function TotalTime(props) {
    const {timeStart, finallyTime} = props;
    const [, update] = useState();
    useEffect(() => { //способ заставить компонент перерисовываться каждую секунду
        const timer = setInterval(() => {
            update({})
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const time = timeStart === null ? 0 : Math.floor((performance.now() - timeStart) / 1000)
    return (
        <li className="text-block__data-item">
            <p className="text-block__text">Общее время</p>
            <div className="text-block__result">
                <div className="icon icon--time"></div>
                <p className="text-block__text">{finallyTime ? finallyTime : time} сек</p>
            </div>
        </li>
    )
};



const mapStateToProps = (state) => (
    {
        timeStart: state.user.startTime,
        finallyTime: state.user.finallyTime,
    }
);

export default connect(mapStateToProps)(TotalTime);