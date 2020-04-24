// src/store/modules/index.js

import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
    counter
});