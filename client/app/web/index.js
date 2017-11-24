import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import reducers from './reducers';
import routes from './routes';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

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
