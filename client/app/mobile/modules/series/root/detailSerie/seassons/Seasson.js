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

const Seasson = function() {
    return(
        <TouchableWithoutFeedback 
            title='toggle' 
            onPress={ this.toogle.bind(this) }
        >
            <View style={ styles.container }>
                <View style={ styles.seassonRow }>
                    <Text style={ styles.seassonText }>Seasson { this.props.seasson.seasson }</Text>
                    <View>
                        <View>
                            <Image 
                                source={ this.state.isOpen ? upIcon : downIcon }
                                style={ styles.image }
                            />
                        </View>
                    </View>
                </View>
                <View>
                    { this.state.isOpen ? this.props.seasson.episodes.map(episode => 
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
    container: {
        marginBottom: 10,
    },
    seassonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(211, 211, 211)',
        padding: 10
    },
    seassonText: {
        flex: 1,
        marginRight: 20,
        color: '#828080',
        fontSize: 15
    },
    image: {
        width: 20, 
        height: 20,
    }
});
