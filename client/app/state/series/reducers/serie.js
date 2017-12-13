import { createReducer } from 'redux-act';
import { getSerieDone } from '../actions/getSerie';

const defaultSerieSerieState = {
    genres: [],
    image: {},
    seassons: []
};

export default createReducer({
    [getSerieDone]: (_, payload) => payload.data
}, defaultSerieSerieState);