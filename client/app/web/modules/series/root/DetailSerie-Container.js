import React, { Component } from 'react';
import DetailSerieSF from 'modules/series/root/DetailSerieSF';
import DetailSerie from './DetailSerie';

class DetailSerieContainer extends Component {
    render() {
        return(
            <DetailSerieSF render={ DetailSerie } serieId={ this.props.match.params.id }/>
        )
    }
}

export default DetailSerieContainer;