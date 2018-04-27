import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}


// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count;
    switch (action.type) {
        case 'INCREMENT':
            return { count: count + 1 };
        case 'DECREMENT':
            return { count: count - 1 };
        default:
            return state
    }
}

// Store
const store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)