import React from 'react';
import serieCardStyles from './serieCard.scss';
import { Link } from 'react-router-dom';
const SerieCard = ({ serie }) =>
    <article className={ serieCardStyles.serieCard }>
        <Link to={ `/series/${serie.id}` }>
            <figure>
                <img src={serie.image.medium} alt={ serie.title } />
                <figcaption>
                    <h2>{ serie.title }</h2>
                    <p>last game of pool was so strange.</p>
                </figcaption>            
            </figure>
        </Link>   
    </article>

export default SerieCard;