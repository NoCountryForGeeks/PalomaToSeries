import React from 'react';
import infoStyles from './info.scss';

const Info = ({ serie }) =>
    <div className={ infoStyles.info }>
        <div>
            <img src={ serie.image ? serie.image.medium : null } alt={ serie.title }/>
        </div>
        <div className={ infoStyles.detail }>
            <h1>{ serie.title }</h1>
            <span>Language: </span><span>{ serie.language }</span>
        </div>
    </div>

export default Info;