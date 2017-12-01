import series from './series';

export default {
    sagas: [ ...series.sagas ],
    reducers: { ...series.reducers }
}