import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import * as localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './src/redux/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: localforage,
  blacklist: [],
};

const history = createBrowserHistory();

const logger = (createLogger)();

const dev = process.env.NODE_ENV === "development";

let middleware = dev ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);

if (dev) {
  middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));


export default ({ element }) => {
  let store = createStore(persistedReducer, {}, middleware)
  const persistor = persistStore(store);
  return <Provider store={store}><PersistGate persistor={persistor}>{element}</PersistGate></Provider>;
};
