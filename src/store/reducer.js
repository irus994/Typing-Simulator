import {ActionType} from './action.js';

export const initialState = {
    text: {
        isDataLoaded: false,
        data: [],
    },
    user: {
        userText: '',
        startTime: null,
        finallyTime: null,
    },
};



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_TEXT :
            return {
                ...state,
                text: {
                    ...state.text,
                    data: action.payload,
                    isDataLoaded: true,
                }
            };
        case ActionType.CHANGE_NEXT :
            return {
                ...state,
                user: {
                    ...state.user,
                    userText: action.payload,
                    startTime: state.user.startTime !== null
                        ? state.user.startTime
                        : performance.now(),
                }
            }

        case ActionType.SET_FINALLY_TIME :
            return {
                ...state,
                user : {
                    ...state.user,
                    finallyTime: action.payload,
                }
            }
        default:
            return state
    }
}