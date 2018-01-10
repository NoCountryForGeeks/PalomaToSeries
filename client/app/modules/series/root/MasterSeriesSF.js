import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CustomFragment } from 'globalSharedComponents';
import { getAllSeriesRequest } from 'state/series/actions/getSeries';
import { searchSeriesRequest } from 'state/series/actions/searchSeries';

class MasterSeriesSF extends Component {
    componentDidMount() {
        this.props.getAllSeries();
    }

    render() {
        return (
            <CustomFragment>
                { this.props.render(this) }
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