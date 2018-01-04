import React from 'react';
import { View } from 'react-native'

import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from 'modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';

export const MasterSeries = props => 
    <View>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ props.searchSeries }/>
        <SeriesGrid series={ props.series } />
    </View>
