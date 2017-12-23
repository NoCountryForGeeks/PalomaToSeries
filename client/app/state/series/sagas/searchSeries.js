import { /*call, */put, takeLatest } from 'redux-saga/effects';
import { searchSeriesRequest, searchSeriesDone, searchSeriesError } from '../actions/searchSeries';
//import { searchSeriesByTitle } from 'services';
import fakeSeries from '../../../../search.json';

function *seachSeriesAction(/*action*/) {
    try {
        //const series = yield call(searchSeriesByTitle, action.payload);     
        const series = {
            data: fakeSeries
        }
        yield put(searchSeriesDone(series))
    } catch (error) {
        yield put(searchSeriesError(error))
    }
}

export default function *searchSeries(){
    yield takeLatest(searchSeriesRequest, seachSeriesAction);
}