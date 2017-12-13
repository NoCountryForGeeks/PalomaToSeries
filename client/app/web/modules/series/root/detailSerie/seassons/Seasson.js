import React from 'react';
import Episode from './seasson/Episode';

const Seasson = function({ props, state }) {
    return(<div>
        <h3>Seasson { props.seasson.seasson }</h3>
        <button onClick={ this.toogle.bind(this) }>Toogle</button>
        { state.isOpen ? props.seasson.episodes.map(episode => 
            <Episode key={ episode.title } episode={ episode } />) : null }
    </div>)
}
export default Seasson;