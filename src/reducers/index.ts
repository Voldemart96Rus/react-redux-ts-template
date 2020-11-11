import { combineReducers } from 'redux';
import { enableES5 } from 'immer';

import test from './test';

enableES5();

export default combineReducers({ test });
