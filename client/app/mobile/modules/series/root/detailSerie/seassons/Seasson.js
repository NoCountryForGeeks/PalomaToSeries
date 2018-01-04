import React from 'react';
import { View, 
    Text, 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Image 
} from 'react-native';
import Episode from './seasson/Episode';
import upIcon from 'content/icons/up-arrow.png';
import downIcon from 'content/icons/down-arrow.png';

const Seasson = function({ state, props, toogle }) {
    return(
        <TouchableWithoutFeedback 
            title='toggle' 
            onPress={ toogle.bind(this) }
        >
            <View style={ styles.seasson }>
                <View style={ styles.seassonRow }>
                    <Text style={ styles.seassonText }>Seasson { props.seasson.seasson }</Text>
                    <View>
                        <Image 
                            source={ state.isOpen ? upIcon : downIcon }
                            style={ styles.seassonImage }
                        />
                    </View>
                </View>
                <View>
                    { state.isOpen ? props.seasson.episodes.map(episode => 
                        <Episode 
                            key={ episode.title } 
                            episode={ episode } 
                        />) : null
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Seasson;

const styles = StyleSheet.create({
    seasson: {
        marginBottom: 10,
    },
    seassonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    seassonText: {
        flex: 1,
        marginRight: 20,
        color: '#828080',
        fontSize: 15
    },
    seassonImage: {
        width: 30, 
        height: 30,
    }
});
