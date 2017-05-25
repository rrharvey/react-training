import { Dispatch } from 'redux';
import { Store } from '../store';
import {
    POSTS_LOAD,
    ALERTS_LOAD,
} from './actionTypes';

export type AlertType = 'success' | 'info' | 'warning' | 'danger';

export interface AlertData {
    id?: number;
    title?: string;
    message: string;
    type?: AlertType;
}

export interface PostData {
    id?: number;
    title: string;
    body: string;
}

export type LoadAlertsAction = {
    type: ALERTS_LOAD,
    alerts: AlertData[]
};

export type LoadPostsAction = {
    type: POSTS_LOAD,
    posts: PostData[]
};

export function loadPosts() {
    return function (dispatch: Dispatch<Store.All>) {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(posts => {
                dispatch({
                    type: POSTS_LOAD,
                    posts
                });
            });
    };
}

export function loadAlerts() {
    return function (dispatch: Dispatch<Store.All>) {
        fetch('http://localhost:3001/alerts')
            .then(response => response.json())
            .then(alerts => {
                dispatch({
                    type: ALERTS_LOAD,
                    alerts
                });
            });
    };
}