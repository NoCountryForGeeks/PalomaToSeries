import { createReducer } from 'redux-act';
import { getAllSeriesDone } from '../actions/getSeries';
import { searchSeriesDone } from '../actions/searchSeries';

const defaultSeriesState = [];

export default createReducer({
    [getAllSeriesDone]: (_, payload) => payload.data,
    [searchSeriesDone]: (_, payload) => payload.data
}, defaultSeriesState);