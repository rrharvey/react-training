import * as React from 'react';
import Alert, { AlertType } from './Alert';

export interface AlertData {
    id?: number;
    title?: string;
    message: string;
    type?: AlertType;
}

interface AlertsProps {
    alerts: AlertData[];
}

class Alerts extends React.Component<AlertsProps, null> {
    render() {
        return (
            <div>
                {this.props.alerts.map(a => {
                    let { id, ...props } = a;
                    return <Alert key={id} {...props} />;
                })}
            </div>
        )
    }
}

export default Alerts;
