
## Ejemplo de como crear proyecto con google maps
npm install --save google-maps-react
npm install @types/googlemaps --save-dev
https://www.npmjs.com/package/google-maps-react
https://stackoverflow.com/questions/55263520/google-maps-react-adding-markers-with-lat-lng


## react para programadores vuejs
https://sebastiandedeyne.com/react-for-vue-developers/

corrección en index.d.ts
type mapEventHandler = (mapProps?: IMapProps, map?: google.maps.Map, event?:Function) => any
type markerEventHandler = (props?: IMarkerProps, marker?: google.maps.Marker, event?:Function) => any

corrección en index.d.ts
export class Test<T,S> {
  field1: T;
  field2: S;
}

type Style = Test<string, string | number | boolean>

## Como crear proyecto
dotnet new reactredux -o ReactRedux

dotnet new sln

dotnet add reference .\pro\pro.csproj


npm ls | select-string typescript

npm install -g react-native-cli


redux-persist
https://stackoverflow.com/questions/48514147/rnredux-persist-autorehydrate-is-not-a-function
https://www.npmjs.com/package/redux-persist


// configureStore.js
 
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

//otro archivo

import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};