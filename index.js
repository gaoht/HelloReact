import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter);

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);