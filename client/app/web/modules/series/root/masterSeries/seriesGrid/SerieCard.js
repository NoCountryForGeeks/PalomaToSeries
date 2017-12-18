import React from 'react';
import serieCardStyles from './serieCard.scss';
import { Link } from 'react-router-dom';
import webConfig from 'webConfig';

const SerieCard = ({ serie: { id, title, image} }) =>
    <article className={ serieCardStyles.serieCard }>
        <Link to={ `${webConfig.routes.master}/${id}` }>
            <figure>
                <img src={  image.medium } alt={ title } />
                <figcaption>
                    <h2>{ title }</h2>
                    <p>last game of pool was so strange.</p>
                </figcaption>            
            </figure>
        </Link>   
    </article>

export default SerieCard;