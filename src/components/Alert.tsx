import * as React from 'react';
import * as classNames from 'classnames';

type AlertType = 'success' | 'info' | 'warning' | 'danger';

interface AlertProps {
    title?: string;
    body: string;
    type?: AlertType;
    dismissable?: boolean;
}

const Alert: React.SFC<AlertProps> = ({ type, title, body, dismissable }) => (
    <div className={classNames('alert', `alert-${type}`, {
        'alert-dismissible': dismissable
    })} role="alert">
        {dismissable && (
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        )}
        <strong>{title}</strong> {body}
    </div>
);

Alert.defaultProps = {
    type: 'info',
    dismissable: false
};

export default Alert;
