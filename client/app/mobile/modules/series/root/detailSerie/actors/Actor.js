import React from 'react';
import { View, Text, Image } from 'react-native';

const Actor = ({ actor: { person, character} }) => 
        <View>
            <Image 
                style={{ width: 150, height: 150 }}
                source={{
                    uri: person.image.medium,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ person.name }</Text>

            <Image 
                style={{ width: 150, height: 150 }}
                source={{
                    uri: character.image.medium,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ character.name }</Text>

        </View>

export default Actor;