import React, { Component/*, Fragment*/ } from 'react';
import { View } from 'react-native';
class SeriesSearchSF extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    searchSeries() {
        this.props.searchSeries(this.state.search);
        this.setState({ search: '' })
    }

    searchHelpSeries(value) {
        this.setState({ ...this.state, search: value })
    }
    
    render() {
        return (
            <View>
                { this.props.render.bind(this)(this) }
            </View>
        )
    }
}


export default  SeriesSearchSF;