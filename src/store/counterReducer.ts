import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET
} from '../actions/actionTypes';
import {
    IncrementCounterAction,
    DecrementCounterAction,
    ResetCounterAction,
} from '../actions/counter';
import { OtherAction } from '../actions/other';

type CounterAction = IncrementCounterAction
    | DecrementCounterAction
    | ResetCounterAction
    | OtherAction;

export type CounterState = {
    count: number
};

const INITIAL_STATE = {
    count: 0
};

export function counterReducer(state: CounterState = INITIAL_STATE, action: CounterAction = OtherAction) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return { ...state, count: state.count += action.by };
        case COUNTER_DECREMENT:
            return { ...state, count: state.count -= action.by };
        case COUNTER_RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
}
