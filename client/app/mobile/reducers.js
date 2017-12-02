import { combineReducers } from 'redux';

import series  from '../state';

export default combineReducers({
    ...series.reducers,
});