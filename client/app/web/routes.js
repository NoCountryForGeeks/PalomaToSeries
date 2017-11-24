import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';

import { Master } from './features/master/Master';

export default (
    <Switch>
        <Route exact name='master' path='/' component= { Master } />
        <Route name='detail' path='/detail'
            component= { asyncComponent({
                resolve: () =>  import ('./features/detail/Detail')
            }) }
        />
    </Switch>
);
