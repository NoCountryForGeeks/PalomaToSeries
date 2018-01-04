import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'mobileSharedComponents';

const SerieCard = function({ serie }) {
    return(
        <Link to={{ routeName: 'Detail', params: { id: serie.id } }}>
            <View style={ styles.serieCard }>
                <Image 
                    style={ styles.serieImage }
                    source={{
                        uri: serie.image.medium,
                        cache: 'only-if-cached',
                    }}
                />
                <View style={ styles.serieDetailContainer }>
                    <Text style={ styles.serieTitle }>{ serie.title }</Text>
                    <View style={ styles.alignRow }>
                        <View style={ styles.leftChildRow }>
                            <Text style={ styles.serieTextFormat }>{ serie.language }</Text>
                        </View>
                        <View style={ styles.rightChildRow }>
                            <Text style={ styles.serieTextFormat }>Episodios: 100</Text>
                            <Text style={ styles.serieTextFormat }>Temporadas: 6</Text>
                        </View>
                    </View>
                </View>
            </View>        
        </Link>      
    )     
}

export default SerieCard;

const styles = StyleSheet.create({
    serieCard: {
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    serieImage: {
        width: '100%', 
        height: 300
    },
    serieDetailContainer: {
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