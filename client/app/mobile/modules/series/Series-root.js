import React, { Component } from 'react';
import { View, Image } from 'react-native';
import background from '../../../../content/images/background.jpg'

class SeriesRoot extends Component {
    render() {
        return(
            <View>
                <Image style={ styles.backgroundContainer } source={ background } />
                {this.props.children}  
            </View>
        );
    }
}

export default SeriesRoot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    backgroundContainer: {
        flex: 1,
        width: 500,
        height: 500,
        resizeMode: 'cover',
    },
}); 
