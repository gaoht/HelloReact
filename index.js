import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import 'antd/dist/antd.css';




import App from './pages/app'
import counter from './reducers'
import Counter from './components/Counter'

const store = createStore(counter);

function mapStateToProps(state) {
    return {
        value: state.count
    }
}




//function mapDispatchToProps(dispatch){
//    return {
//        onIncrement: () => dispatch({type: 'INCREMENT'}),
//        onDecrement: () => dispatch({type: 'DECREMENT'})
//    };
//}
//const history = createHistory();

//const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);