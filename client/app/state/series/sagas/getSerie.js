import { call, put, takeLatest } from 'redux-saga/effects';
import { getSerieRequest, getSerieDone, getSerieError } from '../actions/getSerie';
import { getSerieById } from 'services'


function *getSerieAction(action) {
    try {
        const serie= yield call(getSerieById, action.payload); 
        yield put(getSerieDone(serie))
    } catch (error) {
        yield put(getSerieError(error))
    }
}

export default function *getSerie(){
    yield takeLatest(getSerieRequest, getSerieAction);
}