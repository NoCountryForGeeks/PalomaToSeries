import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Info from './detailSerie/Info';
import Seassons from './detailSerie/Seassons';
import Actors from './detailSerie/Actors';

const DetailSerie = ({ serie }) => 
    <ScrollView style={ styles.container }>
        <Info serie={ serie } />
        <Seassons seassons={ serie.seassons } />
        <Actors actors={ serie.actors } />
    </ScrollView>

export default DetailSerie;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});