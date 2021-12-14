import React from 'react';

export default function ResultBlock() {
    return (
        <div className="text-block__data">
            <ul className="text-block__data-list">
                <li className="text-block__data-item">
                    <p className="text-block__text">Скорость</p>
                    <div className="text-block__result">
                        <div className="icon icon--speed"></div>
                        <p className="text-block__text">150</p> <br/><p className="text-block__text">зн/мин</p>
                    </div>
                </li>
                <li className="text-block__data-item">
                    <p className="text-block__text">Точность</p>
                    <div className="text-block__result">
                        <div className="icon icon--accuracy"></div>
                        <p className="text-block__text">100%</p>
                    </div>
                </li>
                <li className="text-block__data-item">
                    <p className="text-block__text">Общее время</p>
                    <div className="text-block__result">
                        <div className="icon icon--time"></div>
                        <p className="text-block__text">5 мин</p>
                    </div>
                </li>
            </ul>
            <button className="button">Повторить</button>
        </div>
    )
};