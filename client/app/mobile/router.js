import React from 'react';
import { StackNavigator } from 'react-navigation';

import MasterSeriesSF from 'modules/series/root/MasterSeriesSF';
import { MasterSeries } from './modules/series/root/MasterSeries';

import DetailSerieContainer from './modules/series/root/DetailSerie-Container';

const Router = StackNavigator({
    Main: {
        screen: props => <MasterSeriesSF render={ MasterSeries } { ...props }/>
    },
    Detail: {
        path: 'series/:id',
        screen: DetailSerieContainer
    }
},
{
    headerMode: 'screen', 
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export default Router;