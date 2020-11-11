import {Dispatch} from 'react';
import {SetText, SET_TEXT} from '../types';

export const setText = (text: string) => (dispatch: Dispatch<SetText>) => {
    dispatch({
        type: SET_TEXT,
        payload: {text},
    });
};
