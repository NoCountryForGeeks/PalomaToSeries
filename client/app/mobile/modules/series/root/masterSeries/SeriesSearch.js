import React from 'react';
import { View, 
    TextInput, 
    TouchableWithoutFeedback, 
    Text,
    StyleSheet
} from 'react-native'; 

const SeriesSearch = function({ state }) { 
    return(
        <View style={ styles.container }>
            <TextInput 
                placeholder='Search...'
                value={ state.search }
                onChangeText={ value => this.searchHelpSeries.bind(this)(value) }
            />
            <TouchableWithoutFeedback 
                onPress={ this.searchSeries.bind(this) }
                title='Search'
            >
                <Text>Search</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default SeriesSearch;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    textInput: {
        flex: 4
    },
    button: {
        flex: 2
    }
});