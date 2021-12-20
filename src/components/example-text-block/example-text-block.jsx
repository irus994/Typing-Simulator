import React from 'react';
import {connect} from 'react-redux'


export function ExampleTextBlock(props) {
    const {text} = props;

    return (
        <div className="text-block__text-area">{text.join()}</div>
    )
}

const mapStateToProps = (state) => ({
    text: state.text.data,
});

export default connect(mapStateToProps)(ExampleTextBlock);