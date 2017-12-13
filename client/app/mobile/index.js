import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Router from './routes';
import sagas from './sagas'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers,
  composeEnhacers(applyMiddleware(...middlewares)));

sagas.map(saga => sagaMiddleware.run(saga));


const App =  () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

