import React from 'react' 

const Info = ({ serie }) =>
    <div>
        <img src={ serie.image.original } alt={ serie.title }/>
        <h3>{ serie.title }</h3>
        <span>{ serie.languaje }</span>
    </div>

export default Info;