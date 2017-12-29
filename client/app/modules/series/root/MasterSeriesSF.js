import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSeriesRequest } from 'state/series/actions/getSeries';
import { searchSeriesRequest } from 'state/series/actions/searchSeries';
import CustomFragment from 'customFragment';

class MasterSeriesSF extends Component {
    componentDidMount() {
        this.props.getAllSeries();
    }

    render() {
        return (
            <CustomFragment>
                { this.props.render.bind(this)(this.props) }
            </CustomFragment>
        )
    }
}

const mapStateToProps = ({ series }) => ({ series });

const mapDispatchToProps = dispatch => ({
    getAllSeries: () => dispatch(getAllSeriesRequest()),
    searchSeries: search => dispatch(searchSeriesRequest(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterSeriesSF);