import * as React from 'react';
import Alert, { AlertType } from './Alert';
import Dropdown, { DropdownItem } from './Dropdown';
import './Alerts.css';

const filters: DropdownItem[] = [
    { key: '', value: 'None' },
    { key: 'success', value: 'Success' },
    { key: 'info', value: 'Info' },
    { key: 'warning', value: 'Warning' },
    { key: 'danger', value: 'Danger' }
];

export interface AlertData {
    id?: number;
    title?: string;
    message: string;
    type?: AlertType;
}

interface AlertsProps {
    alerts: AlertData[];
}

interface AlertsState {
    filter?: string;
}

class Alerts extends React.Component<AlertsProps, AlertsState> {
    constructor() {
        super();
        this.state = {};
    }

    handleFilterSelected = (filter: string) => {
        this.setState({ filter });
    }

    render() {
        const { alerts } = this.props;
        const { filter } = this.state;

        return (
            <div className="alerts">
                <div className="clearfix">
                    {filter && (
                        <div className="filter pull-left">
                            Filter: {filters.filter(i => i.key === filter)[0].value}
                        </div>
                    )}
                    <div className="pull-right">
                        <Dropdown text="Filter"
                            items={filters}
                            onItemSelected={this.handleFilterSelected}
                            rightAlign={true}
                        />
                    </div>
                </div>
                {alerts
                    .filter(a => !filter || filter === a.type)
                    .map(a => {
                        let { id, ...props } = a;
                        return <Alert key={id} {...props} />;
                    })}
            </div>
        );
    }
}

export default Alerts;
