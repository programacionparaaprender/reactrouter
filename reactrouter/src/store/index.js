import * as Counter from './Counter';


export const ApplicationState = {
    counter: Counter.CounterState,
}


export const reducers = {
    counter: Counter.reducer,
    products: Product.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    vieja: Vieja.reducer,
    googlemaps: GoogleMaps.reducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export const AppThunkAction = {
    (
        dispatch(action) => (), 
        getState() => (ApplicationState))
}
