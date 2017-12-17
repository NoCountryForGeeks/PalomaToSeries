import { call, put, takeLatest } from 'redux-saga/effects';
import { searchSeriesRequest, searchSeriesDone, searchSeriesError } from '../actions/searchSeries';
import { searchSeriesByTitle } from '../../../services';

function *seachSeriesAction(action) {
    try {
        const series= yield call(searchSeriesByTitle, action.payload);       
        yield put(searchSeriesDone(series))
    } catch (error) {
        yield put(searchSeriesError(error))
    }
}

export default function *searchSeries(){
    yield takeLatest(searchSeriesRequest, seachSeriesAction);
}