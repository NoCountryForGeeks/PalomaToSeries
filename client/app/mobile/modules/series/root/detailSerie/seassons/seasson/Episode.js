import React from 'react';
import { View, Text, Image } from 'react-native';

const Episode = ({ episode }) => 
    <View>
        <Image 
            style={{ width: 150, height: 150 }}
            source={{
                uri: episode.image ? episode.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ episode.title }</Text>
    </View>

export default Episode;