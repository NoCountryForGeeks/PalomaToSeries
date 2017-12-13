import React from 'react'
import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from '../../../../modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';

const MasterSeries = props => 
    <div>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ props.searchSeries }/>
        <SeriesGrid series={ props.series } />
    </div>

export default MasterSeries;

    


