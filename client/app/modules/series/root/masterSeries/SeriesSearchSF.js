import React, { Component } from 'react';
import CustomFragment from 'customFragment';

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
            <CustomFragment>
                { this.props.render.bind(this)(this) }
            </CustomFragment>
        )
    }
}


export default  SeriesSearchSF;