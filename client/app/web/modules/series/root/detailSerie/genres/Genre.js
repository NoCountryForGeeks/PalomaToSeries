import React from 'react';

const Genre = ({ genre }) =>
    <div>
        <img src={ genre.person.image.medium } alt={ genre.person.name } />
        <div>{ genre.person.name }</div>
        <img src={ genre.character.image.medium } alt={ genre.character.name } />
        <div>{ genre.character.name }</div>
    </div>

export default Genre;