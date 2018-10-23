import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import search, { searchEpic } from './search';

export const rootEpic = combineEpics(
    searchEpic,
);

export const rootReducer = combineReducers({
    search,
});