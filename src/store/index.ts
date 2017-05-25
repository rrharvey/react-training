import { createStore, combineReducers } from 'redux';
import { counterReducer, CounterState } from './counterReducer';

export namespace Store {
    export type Counter = CounterState;
    export type All = {
        counter: Counter
    };
}

export const store = createStore(combineReducers({
    counter: counterReducer
}));