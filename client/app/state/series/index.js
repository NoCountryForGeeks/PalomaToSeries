import getAllSeries from './sagas/getSeries';
import searchSeries from './sagas/searchSeries';
import getSerie from './sagas/getSerie';
import series from './reducers/series';
import serie from './reducers/serie';

export default {
    sagas : [ getAllSeries, searchSeries, getSerie ],
    reducers: { series, serie }
};