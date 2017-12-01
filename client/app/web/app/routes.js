import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MasterSeries from './modules/series/masterSeries';

export default (
    <Switch>
        <Route exact name='master' path='/' component= { MasterSeries } />
    </Switch>
);
