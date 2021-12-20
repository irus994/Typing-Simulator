import {ActionCreator} from './action'

export const fetchText = () => (dispatch) => {
    return fetch(`https://baconipsum.com/api/?type=all-meat&sentences=3&start-with-lorem=1`)
        .then((response) => response.json())
        .then((response) => dispatch(ActionCreator.loadText(response)))
};