import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import './Count.css';

interface ConnectedStoreProps {
    count: number;
}

const mapStateToProps = (state: Store.All): ConnectedStoreProps => ({
    count: state.counter.count
});

const CountComponent: React.SFC<ConnectedStoreProps> = ({ count }) =>
    <div className="count">Count: {count}</div>;

const Count = connect(mapStateToProps)(CountComponent);

export default Count;

