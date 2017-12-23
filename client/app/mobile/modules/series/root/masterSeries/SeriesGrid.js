import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native'
import SerieCard from './seriesGrid/SerieCard';

class SeriesGrid extends Component {
    renderSerieCard(serie) {
        return <SerieCard serie={ serie }/>
    }

    render() {
        return(
            <FlatList 
                style={ styles.container }
                data={this.props.series}
                renderItem={ ({ item }) => this.renderSerieCard(item) }
                keyExtractor={(item) => item.id}
            />
        )
    }
}

export default SeriesGrid;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})