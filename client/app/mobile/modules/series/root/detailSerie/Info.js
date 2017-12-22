import React from 'react';
import { View, Image, Text } from 'react-native';

const Info = ({ serie }) =>
    <View>
        <Image 
            style={{ width: 150, height: 150 }}
            source={{
                uri: serie.image.medium,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ serie.title }</Text>
        <Text>{ serie.language }</Text>
    </View>

export default Info;
