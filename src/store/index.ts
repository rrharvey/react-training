import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer, CounterState } from './counterReducer';
import { apiReducer, ApiState } from './apiReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export namespace Store {
    export type Api = ApiState;
    export type Counter = CounterState;
    export type All = {
        api: Api,
        counter: Counter
    };
}

const reducers = combineReducers({
    api: apiReducer,
    counter: counterReducer
});

const middleware = [
    thunk,
    createLogger()
];
export const store = createStore(reducers, {} as Store.All, applyMiddleware(...middleware));