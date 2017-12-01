import { call, put, takeLatest } from 'redux-saga/effects';
import { getSeriesRequest, getSeriesDone, getSeriesError } from '../actions/getSeries';
import { getSeries } from '../../../services'

function *getAllSeriesSaga() {
    try {
        const series= yield call(getSeries);
        
        yield put(getSeriesDone(series))
    } catch (error) {
        yield put(getSeriesError(error))
    }
}

export default function *getAllSeries(){
    yield takeLatest(getSeriesRequest, getAllSeriesSaga);
}