import React, { Component, Fragment } from 'react';

class SeriesSearchSF extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    searchSeries(event) {
        event.preventDefault();
        this.props.searchSeries(this.state.search);
    }

    searchHelpSeries(event) {
        this.setState({ search: event.target.value })
    }
    
    render() {
        return (
            <Fragment>
                { this.props.render.bind(this)(this.state) }
            </Fragment>
        )
    }
}


export default  SeriesSearchSF;