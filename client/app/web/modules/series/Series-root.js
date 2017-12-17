import React, { Component, Fragment } from 'react';

class SeriesRoot extends Component {
    render() {
        return(
            <Fragment>
                { this.props.children }  
            </Fragment>
        );
    }
}

export default SeriesRoot;