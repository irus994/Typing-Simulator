import React, {useRef} from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from "react-redux";

export function TextArea(props) {

    const {textChange, exampleText, setFinallyTime} = props;
    const textRef = useRef();

   const handelTextChange = () => {
        let finallyTime = null;
        const userText = textRef.current.value;
           if (userText.length === exampleText.join(' ').length) {
               finallyTime = Math.floor(performance.now() / 1000);
               setFinallyTime(finallyTime);
               console.log(finallyTime)
           }
        textChange(userText);
    }

    return (
        <textarea ref={textRef} onChange={handelTextChange} className="text-block__text-area"/>
    )
};

const mapStateToProps = (state) => (
    {
        exampleText: state.text.data
    }
);

const mapDispatchToProps = (dispatch) => ({
    textChange(userText) {
        dispatch(ActionCreator.changeText(userText))
    },
    setFinallyTime(finallyTime) {
        dispatch(ActionCreator.setFinallyTime(finallyTime))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);