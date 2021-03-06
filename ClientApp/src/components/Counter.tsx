import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

class Counter extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.increment(); }}>
                    Increment
                </button>
                <button type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => { this.props.decrement(); }}>
                    Decrement
                </button>
                </div>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Counter);
