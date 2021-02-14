// Imports: Dependencies
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// Imports: Redux
import rootReducer from '../reducers/index';
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'counterReducer',
  ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};

/* import * as Counter from './Counter'; */


/* export const ApplicationState = {
    counter: Counter.CounterState,
}


export const reducers = {
    counter: Counter.reducer,
    products: Product.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    vieja: Vieja.reducer,
    googlemaps: GoogleMaps.reducer,
}; */

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
/* export const AppThunkAction = {
    (
        dispatch(action) => (), 
        getState() => (ApplicationState))
}
 */