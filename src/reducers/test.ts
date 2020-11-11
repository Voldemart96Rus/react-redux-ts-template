import { SET_TEXT, ITest, TestActionTypes } from '../types';

const initialState: ITest = {
    text: 'Hello world',
};

export default (state = initialState, action: TestActionTypes) => {
    switch (action.type) {
        case SET_TEXT: {
            return {
                ...state,
                text: action.payload.text,
                loading: false,
            };
        }
        default:
            return state;
    }
};
