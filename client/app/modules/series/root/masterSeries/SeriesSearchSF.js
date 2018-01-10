import React, { Component } from 'react';

import { CustomFragment } from 'globalSharedComponents';

class SeriesSearchSF extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    searchSeries() {
        this.props.searchSeries(this.state.search);
        this.setState({ search: '' })
    }

    updateSearchValue(value) {
        this.setState({ ...this.state, search: value })
    }
    
    render() {
        const props = {
            state: this.state,
            searchSeries: this.searchSeries.bind(this),
            updateSearchValue: this.updateSearchValue.bind(this)
        }
        return (
            <CustomFragment>
                { this.props.render(props) }
            </CustomFragment>
        )
    }
}


export default  SeriesSearchSF;