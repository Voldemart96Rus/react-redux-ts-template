import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { IStoreState, ITest } from './types';

type IProps = {
    test: ITest;
};

const App: React.FC<IProps> = ({ test }: IProps) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {test.text}
            </header>
        </div>
    );
};

const mapStateToProps = (state: IStoreState) => ({
    test: state.test,
});

export default connect(mapStateToProps, {})(App);
