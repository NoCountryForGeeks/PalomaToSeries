import React from 'react';

const Episode = ({ episode }) =>
    <div>
        <img src={ episode.image.medium } alt={ episode.title } />
        <h4>{ episode.title }</h4>
    </div>


export default Episode;