import React from 'react';
import SeriesGrid from './masterSeries/SeriesGrid';
import { View } from 'react-native';


export const MasterSeries = props =>
    <View>
        <SeriesGrid series={ props.series } />
    </View>
