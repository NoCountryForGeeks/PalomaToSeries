import { createAction } from 'redux-act'

const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
const GET_SERIES_DONE = 'GET_SERIES_DONE';
const GET_SERIES_ERROR = 'GET_SERIES_ERROR';

const getSeriesRequest = createAction(GET_SERIES_REQUEST);
const getSeriesDone = createAction(GET_SERIES_DONE);
const getSeriesError = createAction(GET_SERIES_ERROR);

export { getSeriesRequest, getSeriesDone, getSeriesError }