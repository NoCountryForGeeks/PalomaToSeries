import React from 'react';
import { StackNavigator } from 'react-navigation';

import MasterSeriesSF from '../modules/series/root/MasterSeriesSF';
import { MasterSeries } from './modules/series/root/MasterSeries';


const Router = StackNavigator({
	Main: {
		screen: props => <MasterSeriesSF render={ MasterSeries } { ...props }/>
	}
});

export default Router;