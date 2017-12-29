import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Link from '../../../../shared/Link';

const SerieCard = function({ serie }) {
    return(
        <Link to={{ routeName: 'Detail', params: { id: serie.id } }}>
            <View style={ styles.container }>
                <Image 
                    style={ styles.image }
                    source={{
                        uri: serie.image.medium,
                        cache: 'only-if-cached',
                    }}
                />
                <View style={ styles.dataContainer }>
                    <Text style={ styles.title }>{ serie.title }</Text>
                    <View style={ styles.dataAlignRow }>
                        <View style={ styles.leftDataChild }>
                            <Text style={ styles.textFormat }>{ serie.language }</Text>
                        </View>
                        <View style={ styles.rightDataChild }>
                            <Text style={ styles.textFormat }>Episodios: 100</Text>
                            <Text style={ styles.textFormat }>Temporadas: 6</Text>
                        </View>
                    </View>
                </View>
            </View>        
        </Link>      
    )     
}

export default SerieCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(211, 211, 211)',
        marginBottom: 20,
    },
    image: {
        width: '100%', 
        height: 300
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#828080',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#828080',
        borderBottomWidth: 0.5
    },
    dataContainer: {
        padding: 10
    },
    dataAlignRow: {
        flexDirection: 'row'
    },
    leftDataChild: {
        flex: 0.5,
        paddingRight: 10,
        borderRightColor: '#828080',
        borderRightWidth: 0.5
    },
    rightDataChild: {
        flex: 0.5,
        paddingLeft: 10
    },
    textFormat: {
        color: '#828080',
        fontSize: 15
    }
});