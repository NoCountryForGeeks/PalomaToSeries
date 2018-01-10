import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CustomFragment } from 'globalSharedComponents';
import { getSerieRequest } from 'state/series/actions/getSerie';

class DetailSerieSF extends Component {
   componentDidMount() {
        const { getSerie, serieId } = this.props;
        getSerie(serieId);
    }

    render() {
        return (
            <CustomFragment>
                { this.props.render(this) }
            </CustomFragment>
        )
    }
}

const mapStateToProps = ({ serie }) => ({ serie });

const mapDispatchToProps = dispatch => ({
    getSerie: id => dispatch(getSerieRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailSerieSF);