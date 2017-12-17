import React, { Component, Fragment } from 'react';

class SeriesSearchSF extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    searchSeries(event) {
        event.preventDefault();
        this.props.searchSeries(this.state.search);
        this.setState({ ...this.state, search: '' })
    }

    searchHelpSeries(event) {
        this.setState({ ...this.state, search: event.target.value })
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