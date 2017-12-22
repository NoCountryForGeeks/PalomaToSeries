import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import Link from '../../../../shared/Link';

const SerieCard = function({ serie }) {
    return(
        <Link to={{ routeName: 'Detail', params: { id: serie.id }}}  >
            <View>
                <Image 
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: serie.image.medium,
                        cache: 'only-if-cached',
                    }}
                />
                <Text>{ serie.title }</Text>
            </View>        
        </Link>      
    )     
}

export default SerieCard;