import React, { Component, Fragment } from 'react';

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
            <Fragment>
                { this.props.render.bind(this)(this) }
            </Fragment>
        )
    }
}


export default  SeriesSearchSF;