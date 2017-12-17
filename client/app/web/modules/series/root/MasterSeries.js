import React from 'react';
import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from '../../../../modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';
import masterStyles from './masterSeries.scss';

const MasterSeries = props => 
    <main className={masterStyles.masterFlex}>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ props.searchSeries }/>
        <SeriesGrid series={ props.series } />
    </main>

export default MasterSeries;

    


