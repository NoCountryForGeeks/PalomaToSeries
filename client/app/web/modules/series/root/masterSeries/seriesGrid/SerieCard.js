import React from 'react';

const SerieCard = ({ serie }) =>
    <div>
        <img src={ serie.image.medium } alt={ serie.title } />
        { serie.title }
    </div>

export default SerieCard;