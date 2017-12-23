import React, { Component/*, Fragment*/ } from 'react';
import { connect } from 'react-redux';
import { getAllSeriesRequest } from 'state/series/actions/getSeries';
import { searchSeriesRequest } from 'state/series/actions/searchSeries';
import { View } from 'react-native';

class MasterSeriesSF extends Component {
    componentDidMount() {
        this.props.getAllSeries();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                { this.props.render.bind(this)(this.props) }
            </View>
        )
    }
}

const mapStateToProps = ({ series }) => ({ series });

const mapDispatchToProps = dispatch => ({
    getAllSeries: () => dispatch(getAllSeriesRequest()),
    searchSeries: search => dispatch(searchSeriesRequest(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterSeriesSF);