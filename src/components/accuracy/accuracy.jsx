import React from 'react';
import {connect} from "react-redux";


export function Accuracy(props) {
    const {userText, exampleText} = props;
    const userWords = userText.split(' ');
    const exampleTextWords = exampleText.join(' ').split(' ');

    let errorCount = 0;
    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i].length < exampleTextWords[i].length && i === (userWords.length - 1)) {
            continue;
        }
        if ((userText !== '') && (userWords[i] !== exampleTextWords[i])) {
            errorCount = errorCount + 1;
        }
    }
    console.log(errorCount);

    return (
        <li className="text-block__data-item">
            <p className="text-block__text">Точность</p>
            <div className="text-block__result">
                <div className="icon icon--accuracy"></div>
                <p className="text-block__text">{Math.round((((userWords.length) - errorCount) * 100)/ userWords.length)}%</p>
            </div>
        </li>
    )
};

const mapStateToProps = (state) => ({
    userText: state.user.userText,
    exampleText: state.text.data
});

export default connect(mapStateToProps)(Accuracy);