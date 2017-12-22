import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import sagas from './sagas';

import SeriesNavigator from './modules/navigators/SeriesNavigator';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers,
  composeEnhacers(applyMiddleware(...middlewares)));

sagas.map(saga => sagaMiddleware.run(saga));


const App =  () => {
  return (
    <Provider store={store}>
      <SeriesNavigator />
    </Provider>
  );
}

export default App;

