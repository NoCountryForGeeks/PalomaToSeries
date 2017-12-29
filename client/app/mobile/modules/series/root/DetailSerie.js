import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import Info from './detailSerie/Info';
import Seassons from './detailSerie/Seassons';
import Actors from './detailSerie/Actors';
import background from 'content/images/background.jpg'

const DetailSerie = ({ serie }) => 
    <View style={ styles.container }>
        <Image style={ styles.backgroundContainer } source={ background } />
        <View style={ styles.contentContainer }>
            <ScrollView style={ styles.container }>
                <Info serie={ serie } />
                <Seassons seassons={ serie.seassons } />
                <Actors actors={ serie.actors } />
            </ScrollView>
        </View>
    </View>

export default DetailSerie;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
      },
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        backgroundColor: '#889DAD',
    }
});