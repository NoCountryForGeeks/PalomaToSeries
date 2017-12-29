import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import exchangeIcon from 'content/icons/exchange.png';

const Actor = ({ actor: { person, character} }) => 
        <View style={ styles.container }>
            <View style={ styles.subContainer }>
                <Image 
                    style={ styles.image }
                    source={{
                        uri: person.image.medium,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ person.name }</Text>
            </View>
            <View>
                <Image 
                    source={ exchangeIcon }
                    style={ styles.exchangeImage }
                />
            </View>
            <View style={ styles.subContainer }>
                <Image 
                    style={ styles.image }
                    source={{
                        uri: character.image.medium,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ character.name }</Text>
            </View>
        </View>

export default Actor;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(211, 211, 211)',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    subContainer: {
        flex: 0.4
    },
    image: {
        width: '100%', 
        height: 180,
        resizeMode: 'contain'
    },
    actorNameText: {
        color: '#828080',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    exchangeImage: {
        width: 30, 
        height: 30,
    }
});
