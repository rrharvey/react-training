import {
    ALERTS_LOAD,
    POSTS_LOAD,
} from '../actions/actionTypes';
import {
    LoadAlertsAction,
    LoadPostsAction,
    AlertData,
    PostData,
} from '../actions/api';
import { OtherAction } from '../actions/other';

type ApiAction = LoadAlertsAction
    | LoadPostsAction
    | OtherAction;

export type ApiState = {
    alerts: AlertData[],
    posts: PostData[]
};

const INITIAL_STATE = {
    alerts: [],
    posts: []
};

export function apiReducer(state: ApiState = INITIAL_STATE, action: ApiAction = OtherAction) {
    switch (action.type) {
        case ALERTS_LOAD:
            return { ...state, alerts: action.alerts };
        case POSTS_LOAD:
            return { ...state, posts: action.posts };
        default:
            return state;
    }
}