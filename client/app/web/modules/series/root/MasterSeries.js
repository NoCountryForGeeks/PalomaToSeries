import React from 'react';
import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from 'modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';
import masterStyles from './masterSeries.scss';

const MasterSeries = ({ props: { series, searchSeries } }) => 
    <main className={ masterStyles.masterFlex }>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ searchSeries }/>
        <SeriesGrid series={ series } />
    </main>

export default MasterSeries;

    


