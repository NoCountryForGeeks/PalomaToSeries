import { createAction } from 'redux-act';

const GET_ALL_SERIES_REQUEST = 'GET_ALL_SERIES_REQUEST';
const GET_ALL_SERIES_DONE = 'GET_ALL_SERIES_DONE';
const GET_ALL_SERIES_ERROR = 'GET_ALL_SERIES_ERROR';

const getAllSeriesRequest = createAction(GET_ALL_SERIES_REQUEST);
const getAllSeriesDone = createAction(GET_ALL_SERIES_DONE);
const getAllSeriesError = createAction(GET_ALL_SERIES_ERROR);

export { getAllSeriesRequest, getAllSeriesDone, getAllSeriesError };