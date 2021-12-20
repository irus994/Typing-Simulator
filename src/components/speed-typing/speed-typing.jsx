import React, {useState, useEffect}from 'react';
import {connect} from "react-redux";

export function SpeedTyping(props) {
    const {timeStart, finallyTime, userText} = props;
    const [, update] = useState();
    useEffect(() => { //способ заставить компонент перерисовываться каждую секунду
        const timer = setInterval(() => {
            update({})
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, []);

    const time = finallyTime
        ? finallyTime
        : (timeStart === null
            ? 0
            : Math.floor((performance.now() - timeStart) / 1000));
    const speed = time >= 1 ? Math.round(userText.length / (time / 60)) : 0;

    return (
        <li className="text-block__data-item">
            <p className="text-block__text">Скорость</p>
            <div className="text-block__result">
                <div className="icon icon--speed"></div>
                <p className="text-block__text">{speed}</p> <br/><p className="text-block__text">зн/мин</p>
            </div>
        </li>
    )
};

const mapStateToProps = (state) => (
    {
        timeStart: state.user.startTime,
        finallyTime: state.user.finallyTime,
        userText: state.user.userText,
    }
);
export default connect(mapStateToProps)(SpeedTyping);