import React from 'react'
import Info from './detailSerie/Info';
import Genres from './detailSerie/Genres';
import Seassons from './detailSerie/Seassons';

const DetailSerie = (props) =>{
    console.log(props)
    return (
    <div>
        <Info serie={ props.serie } />
        <Seassons seassons={ props.serie.seassons } />
        <Genres genres={ props.serie.genres } />
    </div>)
}
export default DetailSerie;