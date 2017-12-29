import { combineReducers } from 'redux';

import series  from '../state';
import nav from './modules/reducers/navReducer';

export default combineReducers({
    nav,
    ...series.reducers,
});