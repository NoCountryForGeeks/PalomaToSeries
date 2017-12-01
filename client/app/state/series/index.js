import getAllSeries from './sagas/getSeries';
import series from './reducers/series';

export default {
    sagas : [ getAllSeries ],
    reducers: { series }
}