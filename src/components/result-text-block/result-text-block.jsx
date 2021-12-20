import React from 'react';
import {connect} from "react-redux";

export function ResultTextBlock(props) {
    const {userText, exampleText} = props;
    const userWords = userText !== '' ? userText.split(' ') : [];
    const exampleTextWords = exampleText.join(' ').split(' ')

    return (
        <div className="text-block__text-area text-block__text-area--result"><p>{
            userWords.map((word, index) =>
                word ===  exampleTextWords[index]
                ? <span className="success">{word}</span>
                : word.length < exampleTextWords[index].length && index === (userWords.length - 1)
                    ? <span>{word}</span>
                    : <span className="error">{word}</span>
            )}</p></div>
    )
};

const mapStateToProps = (state) => (
    {
        userText: state.user.userText,
        exampleText: state.text.data
    }
);
export default connect(mapStateToProps)(ResultTextBlock);
