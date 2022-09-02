import React from 'react';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'; //redux form have formreducer
import TaskReducer from './TaskReducer';
//combine Reducers is usefull to combine all reducers to the state
const rootReducer = combineReducers({
    form : formReducer,  //must have pass the formReducer
    TaskReducer
});

export default rootReducer;