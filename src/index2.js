import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import App from './App';
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import counterReducer from './reducer';

const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    function increment() {
        store.dispatch({ type: "INCREMENT" })
        //console.log('increment');
    }
    
    function decrement() {
        store.dispatch({ type: "DECREMENT" })
        //console.log('decrement');
    }

    const Counter = () => {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )
    }

/* ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
 */

const routing = (
    <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/counter">
            Counter Redux
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/counter" component={Counter} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
  )
  //const render = () => ReactDOM.render(routing, document.getElementById('root'))
  const render = () => ReactDOM.render(<Counter />,
    document.getElementById('root'))
  render()
store.subscribe(render);