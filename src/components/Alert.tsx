import * as React from 'react';
import * as classNames from 'classnames';
import { AlertType } from '../actions';

export interface AlertProps {
    title?: string;
    message: string;
    type?: AlertType;
    dismissable?: boolean;
}

const Alert: React.SFC<AlertProps> = ({ type, title, message, dismissable }) => (
    <div className={classNames('alert', `alert-${type}`, {
        'alert-dismissible': dismissable
    })} role="alert">
        {dismissable && (
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        )}
        <strong>{title}</strong> {message}
    </div>
);

Alert.defaultProps = {
    type: 'info',
    dismissable: false
};

export default Alert;
