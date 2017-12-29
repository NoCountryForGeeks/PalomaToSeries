import React from 'react';
import SeriesGrid from './masterSeries/SeriesGrid';
import SeriesSearchSF from 'modules/series/root/masterSeries/SeriesSearchSF';
import SeriesSearch from './masterSeries/SeriesSearch';
import { View, Image, StyleSheet } from 'react-native';
import background from 'content/images/background.jpg'

export const MasterSeries = props => 
    <View style={ styles.container }>
        <Image style={ styles.backgroundContainer } source={ background } />
        <View style={ styles.contentContainer }>
            <SeriesSearchSF render={ SeriesSearch } searchSeries={ props.searchSeries }/>
            <SeriesGrid series={ props.series } />
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        backgroundColor: '#889DAD',
    }
}); 