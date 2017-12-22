import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import routes from './routes';
import sagas from './sagas';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(reducers,
    composeEnhacers(applyMiddleware(...middlewares)));

sagas.map(saga => sagaMiddleware.run(saga));

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </Component>
        </Provider>, document.querySelector('#root'));
    };

render(AppContainer);

if (module.hot) {
    module.hot.accept();
}
