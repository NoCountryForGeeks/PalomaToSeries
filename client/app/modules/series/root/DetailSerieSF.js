import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSerieRequest } from 'state/series/actions/getSerie';

class DetailSerieSF extends Component {
   componentDidMount() {
        const { getSerie, serieId } = this.props;
        getSerie(serieId);
        console.log('getSerie', serieId);
    }

    render() {
        return (
            <Fragment>
                { this.props.render.bind(this)(this.props) }
            </Fragment>
        )
    }
}

const mapStateToProps = ({ serie }) => ({ serie });

const mapDispatchToProps = dispatch => ({
    getSerie: id => dispatch(getSerieRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailSerieSF);