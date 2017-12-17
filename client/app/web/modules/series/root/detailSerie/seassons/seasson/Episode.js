import React from 'react';
import episodeStyles from './episode.scss';

const Episode = ({ episode }) => 
    <div className={ episodeStyles.episode }>
        <img src={ episode.image != null ? episode.image.medium : null } alt={ episode.title } />
        <span>{ episode.title }</span>
    </div>

export default Episode;