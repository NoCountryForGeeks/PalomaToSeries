import { createAction } from 'redux-act'

const SEARCH_SERIES_REQUEST = 'SEARCH_SERIES_REQUEST';
const SEARCH_SERIES_DONE = 'SEARCH_SERIES_DONE';
const SEARCH_SERIES_ERROR = 'SEARCH_SERIES_ERROR';

const searchSeriesRequest = createAction(SEARCH_SERIES_REQUEST);
const searchSeriesDone = createAction(SEARCH_SERIES_DONE);
const searchSeriesError = createAction(SEARCH_SERIES_ERROR);

export { searchSeriesRequest, searchSeriesDone, searchSeriesError }