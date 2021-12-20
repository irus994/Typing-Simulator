export const ActionType = {
    LOAD_TEXT: 'data/loadText',
    CHANGE_NEXT: 'user/changeText',
    SET_FINALLY_TIME: 'user/setFinallyTime',
};

export const ActionCreator = {
    loadText: (text) => ({
        type: ActionType.LOAD_TEXT,
        payload: text,
    }),
    changeText: (newText) => ({
        type: ActionType.CHANGE_NEXT,
        payload: newText,
    }),
    setFinallyTime: (finallyTime) => ({
        type: ActionType.SET_FINALLY_TIME,
        payload: finallyTime,
    }),
};
