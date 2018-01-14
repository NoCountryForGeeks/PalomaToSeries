import React from 'react';
import { View, StyleSheet } from 'react-native';
import SeassonSF from 'modules/series/root/detailSerieFS/SeassonSF';
import Seasson from './seassons/Seasson';

const Seassons = ({ seassons }) => 
    <View style={ styles.seassonsContainer }>
        { seassons.map(seasson => 
            <SeassonSF 
                render={ Seasson } 
                key={ seasson.seassonId } 
                seasson={ seasson } 
            />) 
        }
    </View>

export default Seassons;

const styles = StyleSheet.create({
    seassonsContainer: {
        marginBottom: 10,
    }
});