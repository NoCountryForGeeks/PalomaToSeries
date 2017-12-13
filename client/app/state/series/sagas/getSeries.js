import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllSeriesRequest, getAllSeriesDone, getAllSeriesError } from '../actions/getSeries';
import { getSeries } from '../../../services'

function *getAllSeriesSaga() {
    try {
        const series= yield call(getSeries);
        
        yield put(getAllSeriesDone(series))
    } catch (error) {
        yield put(getAllSeriesError(error))
    }
}

export default function *getAllSeries(){
    yield takeLatest(getAllSeriesRequest, getAllSeriesSaga);
}