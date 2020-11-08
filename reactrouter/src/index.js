import React from 'react';
import * as ReactDOM from 'react-dom';
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
import { createStore } from 'redux'
import counterReducer from './reducer';
import Vieja from './juegos/vieja/index.js';
import GoogleMap from './google/GoogleMap.js';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStorePersisted';
const store = configureStore(history);

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });



/* const row = {float: 'left',width: '100%'};
const col = {float: 'left',width: '33.33%'}; */
const App2 = () => {
  return (
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
  );
};
const routing = (
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
        <Route exact path="/" component={GoogleMap} />
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
  ) 
  ReactDOM.render(routing, document.getElementById('root'))
  //ReactDOM.render(<App2></App2>, document.getElementById('root'))
/*   const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const render = () => ReactDOM.render(<App2 />,  document.getElementById('root'))
  store.subscribe(render); */
  //ReactDOM.render(routing, document.getElementById('root'))
  //const render = () => ReactDOM.render(<Counter />,  document.getElementById('root'))
  
  /* const render = () => ReactDOM.render(routing, document.getElementById('root'))
  render()
store.subscribe(render); */