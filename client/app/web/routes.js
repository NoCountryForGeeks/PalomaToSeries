import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DetailSerie from './modules/series/root/DetailSerie';
import MasterSeries from './modules/series/root/MasterSeries';
import MasterSeriesSF from '../modules/series/root/MasterSeriesSF';
import DetailSerieSF from '../modules/series/root/DetailSerieSF';
import SeriesRoot from './modules/series/Series-root';


export default (
    <SeriesRoot>
        <Switch>
            <Route exact name='root' path='/' render={ () => <Redirect to='series'/> } />
            <Route name='detail' path='/series/:id' render={ props => <DetailSerieSF render={ DetailSerie } { ...props }/> } />
            <Route name='master' path='/series' render={ props => <MasterSeriesSF render={ MasterSeries } { ...props }/> } />
        </Switch>
    </SeriesRoot>
);
