import { StackNavigator } from 'react-navigation';

import MasterSeries from './series/masterSeries';

const Router = StackNavigator({
	Main: { screen: MasterSeries },
});

export default Router;