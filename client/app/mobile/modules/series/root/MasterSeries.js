import React from 'react';
import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from 'modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';
import { View, StyleSheet } from 'react-native';

export const MasterSeries = props => 
    <View style={ styles.container }>
        <SeriesSearchSF render={ SeriesSearch } searchSeries={ props.searchSeries }/>
        <SeriesGrid series={ props.series } />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
}); 