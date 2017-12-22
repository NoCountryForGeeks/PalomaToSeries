import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MasterSeries from './modules/series/root/MasterSeries';
import MasterSeriesSF from 'modules/series/root/MasterSeriesSF';
import DetailSerieContainer from './modules/series/root/DetailSerie-Container';
import SeriesRoot from './modules/series/Series-root';


export default (
    <SeriesRoot>
        <Switch>
            <Route exact name='root' path='/' render={ () => <Redirect to='series'/> } />
            <Route name='detail' path='/series/:id' component={ DetailSerieContainer } />
            <Route name='master' path='/series' render={ props => <MasterSeriesSF render={ MasterSeries } { ...props }/> } />
        </Switch>
    </SeriesRoot>
);
