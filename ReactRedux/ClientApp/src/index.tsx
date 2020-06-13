import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStorePersisted';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);


 
const App2 = () => {
    return (
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    );
  };

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App2 />
        </PersistGate>
      </Provider>
    ,
    document.getElementById('root'));

registerServiceWorker();
