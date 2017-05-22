import * as React from 'react';
import Alert, { AlertType } from './Alert';
import Dropdown from './Dropdown';
import './Alerts.css';

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
            <div className="alerts">
                <div className="clearfix">
                    <div className="pull-right">
                        <Dropdown text="Filter" rightAlign={true} />
                    </div>
                </div>
                {this.props.alerts.map(a => {
                    let { id, ...props } = a;
                    return <Alert key={id} {...props} />;
                })}
            </div>
        );
    }
}

export default Alerts;
