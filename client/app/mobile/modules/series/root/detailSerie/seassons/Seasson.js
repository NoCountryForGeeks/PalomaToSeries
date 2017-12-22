import React from 'react';
import { View, Text, Button } from 'react-native';
import Episode from './seasson/Episode';

const Seasson = function() {
    return(
        <View>
            <Text>Seasson { this.props.seasson.seasson }</Text>
            <Button title='toggle' onPress={ this.toogle.bind(this) }>
                Toggle
            </Button>
            <View>
                { this.state.isOpen ? this.props.seasson.episodes.map(episode => 
                    <Episode 
                        key={ episode.title } 
                        episode={ episode } 
                    />) : null
                }
            </View>
        </View>
    );
}

export default Seasson;
