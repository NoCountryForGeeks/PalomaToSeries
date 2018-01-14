import React from 'react';
import { View } from 'react-native'

import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from 'modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';

export const MasterSeries = ({ props: { series, searchSeries } }) => 
    <View>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ searchSeries }/>
        <SeriesGrid series={ series } />
    </View>
