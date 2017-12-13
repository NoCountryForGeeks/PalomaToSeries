import React, { Component } from 'react';

class SeriesRoot extends Component {
    render() {
        return(
            <div>
                {this.props.children}  
            </div>
        );
    }
}

export default SeriesRoot;