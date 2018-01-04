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
        <View style={ styles.searchBar }>
            <View style={ styles.searchBarBorder }>
                <TextInput 
                    style={ styles.searchBarTextInput }
                    placeholder='Search...'
                    value={ state.search }
                    underlineColorAndroid='transparent'
                    onChangeText={ value => this.searchHelpSeries.bind(this)(value) }
                />
                <TouchableWithoutFeedback 
                    style={ styles.searchBarSubmitButton }
                    onPress={ this.searchSeries.bind(this) }
                    title='Search'
                >
                    <View>
                        <Image 
                            source={ searchIcon }
                            style={ styles.searchBarButtonIcon }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
export default SeriesSearch;

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#242424',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    searchBarBorder: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgb(211, 211, 211)',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    searchBarTextInput: {
        flex: 1,
        fontSize: 15,
        color: 'rgb(211, 211, 211)',
        marginRight: 20
    },
    searchBarSubmitButton: {
        flex: 1
    },
    searchBarButtonIcon: {
        width: 20, 
        height: 20,
    }
});