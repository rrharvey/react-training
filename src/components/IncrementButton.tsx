import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import { incrementCounter } from '../actions';
import { Store } from '../store';

interface IncrementButtonProps {
}

interface ConnectedStoreProps {
    count: number;
}

interface ConnectedDispatchProps {
    increment(by: number): void;
}

const mapStateToProps = (state: Store.All, ownProps: IncrementButtonProps): ConnectedStoreProps => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatchProps => ({
    increment: (by: number) => {
        dispatch(incrementCounter(by));
    },
});

type AllIncrementButtonProps = IncrementButtonProps & ConnectedStoreProps & ConnectedDispatchProps;

class IncrementButtonComponent extends React.Component<AllIncrementButtonProps, {}> {
    countByFive = () => {
        this.props.increment(5);
    }

    render() {
        const { count } = this.props;
        return (
            <button type="button"
                className="btn btn-primary"
                onClick={this.countByFive}
            >
                Increment ({count})
            </button>
        );
    }
}

const IncrementButton: React.ComponentClass<IncrementButtonProps> =
    connect(mapStateToProps, mapDispatchToProps)(IncrementButtonComponent);

export default IncrementButton;
