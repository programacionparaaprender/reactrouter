import React from 'react'
import counterReducer from './reducer';
import { createStore } from 'redux'
const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Counter extends React.Component {
    increment = ()  => {
        store.dispatch({ type: "INCREMENT" })
        //console.log('increment');
    }
    decrement = () =>  {
        store.dispatch({ type: "DECREMENT" })
        //console.log('decrement');
    }
    render() {
      return (
        <div>
                <h1>{store.getState()}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
      )
    }
  }
export default Counter;