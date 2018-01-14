import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Info = ({ serie }) =>
    <View style={ styles.serieInfo }>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image ? serie.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <View style={ styles.serieDetailContainer }>
            <Text style={ styles.serieTitle }>{ serie.title }</Text>
            <View style={ styles.alignRow }>
                <View style={ styles.leftChildRow }>
                    <Text style={ styles.serieTextFormat}>{ serie.language }</Text>
                </View>
                <View style={ styles.rightChildRow }>
                    <Text style={ styles.serieTextFormat }>Episodes: 100</Text>
                    <Text style={ styles.serieTextFormat }>Seassons: 6</Text>
                </View>
            </View>
        </View>
    </View>

export default Info;

const styles = StyleSheet.create({
    serieInfo: {
        marginBottom: 10
    },
    serieImage: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    },
    serieDetailContainer: {
        paddingBottom: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    serieTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#828080',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#828080',
        borderBottomWidth: 0.5
    },
    alignRow: {
        flexDirection: 'row'
    },
    leftChildRow: {
        flex: 0.5,
        paddingRight: 10,
        borderRightColor: '#828080',
        borderRightWidth: 0.5
    },
    rightChildRow: {
        flex: 0.5,
        paddingLeft: 10
    },
    serieTextFormat: {
        color: '#828080',
        fontSize: 15
    }   
});
