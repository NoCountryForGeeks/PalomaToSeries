import { /*call,*/ put, takeLatest } from 'redux-saga/effects';
import { getAllSeriesRequest, getAllSeriesDone, getAllSeriesError } from '../actions/getSeries';
//import { getSeries } from 'services';
import seriesFake from '../../../../series.json';

function *getAllSeriesAction() {
    try {
        //const series= yield call(getSeries); 
        const series = {
            data: seriesFake
        }      
        yield put(getAllSeriesDone(series))
    } catch (error) {
        yield put(getAllSeriesError(error))
    }
}

export default function *getAllSeries(){
    yield takeLatest(getAllSeriesRequest, getAllSeriesAction);
}