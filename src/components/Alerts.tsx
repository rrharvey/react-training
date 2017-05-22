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

interface AlertsState {
    filter?: string;
    alerts: AlertData[];
    filteredAlerts: AlertData[];
}

class Alerts extends React.Component<{}, AlertsState> {
    state = {
        filter: '',
        alerts: [] as AlertData[],
        filteredAlerts: [] as AlertData[]
    };

    async getPosts() {
        const response = await fetch(`http://localhost:3001/alerts`);
        const alerts: AlertData[] = await response.json();
        const filter = this.state.filter;
        this.setState({
            alerts,
            filteredAlerts: alerts.filter(a => !filter || filter === a.type)
        });
    }

    handleFilterSelected = (filter: string) => {
        this.setState({
            filter,
            filteredAlerts: this.state.alerts.filter(a => !filter || filter === a.type)
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        const { filter, filteredAlerts } = this.state;

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
                {filteredAlerts
                    .map(a => {
                        let { id, ...props } = a;
                        return <Alert key={id} {...props} />;
                    })}
            </div>
        );
    }
}

export default Alerts;
