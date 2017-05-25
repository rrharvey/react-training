import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET,
} from './actionTypes';

export type IncrementCounterAction = {
    type: COUNTER_INCREMENT,
    by: number
};

export type DecrementCounterAction = {
    type: COUNTER_DECREMENT,
    by: number
};

export type ResetCounterAction = {
    type: COUNTER_RESET
};

export function incrementCounter(by: number): IncrementCounterAction {
    return {
        type: COUNTER_INCREMENT,
        by
    };
}

export function decrementCounter(by: number): DecrementCounterAction {
    return {
        type: COUNTER_DECREMENT,
        by
    };
}

export function resetCounter(): ResetCounterAction {
    return { type: COUNTER_RESET };
}