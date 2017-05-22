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
    filteredAlerts: AlertData[];
}

class Alerts extends React.Component<AlertsProps, AlertsState> {
    constructor(props: AlertsProps) {
        super();
        this.state = {
            filteredAlerts: [...props.alerts]
        };
    }

    handleFilterSelected = (filter: string) => {
        this.state.filteredAlerts.splice(0, 1);

        this.setState({
            filter,
            filteredAlerts: this.props.alerts.filter(a => !filter || filter === a.type)
        });
    }

    componentWillReceiveProps(nextProps: AlertsProps) {
        const { filter } = this.state;
        const filteredAlerts = filter
            ? nextProps.alerts.filter(a => !filter || filter === a.type)
            : [...nextProps.alerts];
        this.setState({ filteredAlerts });
    }

    shouldComponentUpdate(nextProps: AlertsProps, nextState: AlertsState) {
        return this.props.alerts !== nextProps.alerts
            || this.state.filteredAlerts !== nextState.filteredAlerts;
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
