import * as React from 'react';

interface AlertPropTypes {
}

const Alert = (props: AlertPropTypes) => (
    <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
);

export default Alert;
