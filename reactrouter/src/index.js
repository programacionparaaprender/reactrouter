import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
import Counter from './counter.js'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import counterReducer from './reducer';
import Vieja from './juegos/vieja/index.js';
import GoogleMap from './google/GoogleMap.js';

const history = require("history").createBrowserHistory;
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

    /* const Counter = () => {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )
    } */

/* ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
 */

const row = {float: 'left',width: '100%'};
const col = {float: 'left',width: '33.33%'};

const routing = (
   <Provider store={store}>
   <Router history={history}>
   <header>
   <div  className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
        <nav>
          <ul class="nav nav-pills float-right">

            <li>
              <NavLink exact  class="nav-item nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact  class="nav-item nav-link" to="/googlemaps">
                Google maps
              </NavLink>
            </li>
            <li>
              <NavLink exact  class="nav-item nav-link" to="/vieja">
                Vieja
              </NavLink>
            </li>
            <li>
              <NavLink class="nav-item nav-link" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink class="nav-item nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink class="nav-item nav-link" to="/counter">
                Counter Redux
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/googlemaps" component={GoogleMap} />
        <Route path="/vieja" component={Vieja} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/counter" component={Counter} />
        <Route component={Notfound} />
      </Switch>
      
    </div>
   </header>
  </Router>
  </Provider>
  )
  ReactDOM.render(routing, document.getElementById('root'))

  //ReactDOM.render(routing, document.getElementById('root'))
  //const render = () => ReactDOM.render(<Counter />,  document.getElementById('root'))
  
  /* const render = () => ReactDOM.render(routing, document.getElementById('root'))
  render()
store.subscribe(render); */