import React from 'react';
import serieCardStyles from './serieCard.scss';
import { Link } from 'react-router-dom';
import webConfig from 'webConfig';

const SerieCard = ({ serie: { id, title, image, language } }) =>
    <article className={ serieCardStyles.serieCard }>
        <Link to={ `${webConfig.routes.master}/${id}` }>
            <figure>
                <img src={  image.medium } alt={ title } />
                <figcaption>
                    <h2>{ title }</h2>
                    <p>
                        <span>Language: { language }</span>
                    </p>
                </figcaption>            
            </figure>
        </Link>   
    </article>

export default SerieCard;