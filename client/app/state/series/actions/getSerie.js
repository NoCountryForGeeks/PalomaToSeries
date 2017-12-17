import { createAction } from 'redux-act';

const GET_SERIE_REQUEST = 'GET_SERIE_REQUEST';
const GET_SERIE_DONE = 'GET_SERIE_DONE';
const GET_SERIE_ERROR = 'GET_SERIE_ERROR';

const getSerieRequest = createAction(GET_SERIE_REQUEST);
const getSerieDone = createAction(GET_SERIE_DONE);
const getSerieError = createAction(GET_SERIE_ERROR);

export { getSerieRequest, getSerieDone, getSerieError };