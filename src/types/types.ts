export const SET_TEXT = 'SET_TEXT';

export interface ITest {
    text: string;
}

export interface SetText {
    type: typeof SET_TEXT;
    payload: { text: ITest };
}

export type TestActionTypes = SetText;

export interface IStoreState {
    test: ITest;
}
