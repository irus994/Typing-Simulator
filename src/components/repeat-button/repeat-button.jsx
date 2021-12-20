import React from 'react';

export default function RepeatButton() {
    const handlerOnClick = (evt) => {
        evt.preventDefault();
        window.location.reload()
    }
    return (
        <button onClick={handlerOnClick} className="button">Повторить</button>
    )
}