import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSerieRequest } from 'state/series/actions/getSerie'

class DetailSerieSF extends Component {

    componentDidMount() {
        this.props.getSerie(this.props.match.params.id)
    }

    render() {
        return (
            <Fragment>
                { this.props.render(this.props) }
            </Fragment>
        )
    }
}

const mapStateToProps = ({ serie }) => ({ serie });

const mapDispatchToProps = dispatch => ({
    getSerie: id => dispatch(getSerieRequest(id)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(DetailSerieSF)