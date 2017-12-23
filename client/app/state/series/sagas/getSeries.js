import { /*call, */put, takeLatest } from 'redux-saga/effects';
import { getAllSeriesRequest, getAllSeriesDone, getAllSeriesError } from '../actions/getSeries';
//import { getSeries } from 'services';
import fakeSeries from '../../../../search.json';


function *getAllSeriesAction() {
    try {
        //const series= yield call(getSeries);   
        const series = {
            data: fakeSeries
        }  
        yield put(getAllSeriesDone(series))
    } catch (error) {
        yield put(getAllSeriesError(error))
    }
}

export default function *getAllSeries(){
    yield takeLatest(getAllSeriesRequest, getAllSeriesAction);
}