import { createReducer } from 'redux-act';
import { getSeriesDone } from '../actions/getSeries';

const defaultSeriesState = [];

export default createReducer({
    [getSeriesDone]:  (_,payload) => payload
}, defaultSeriesState);