import React from 'react';
import { View, 
    TextInput, 
    TouchableWithoutFeedback, 
    StyleSheet,
    Image
} from 'react-native'; 
import searchIcon from 'content/icons/magnifier.png';

const SeriesSearch = function({ state }) { 
    return(
        <View style={ styles.container }>
            <View style={ styles.borderContainer }>
                <TextInput 
                    style={ styles.textInput }
                    placeholder='Search...'
                    value={ state.search }
                    underlineColorAndroid='transparent'
                    onChangeText={ value => this.searchHelpSeries.bind(this)(value) }
                />
                <TouchableWithoutFeedback 
                    style={ styles.button }
                    onPress={ this.searchSeries.bind(this) }
                    title='Search'
                >
                    <View>
                        <Image 
                            source={ searchIcon }
                            style={ styles.image }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
export default SeriesSearch;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    borderContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgb(211, 211, 211)',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        color: 'rgb(211, 211, 211)',
        marginRight: 20
    },
    button: {
        flex: 1
    },
    image: {
        width: 20, 
        height: 20,
    }
});