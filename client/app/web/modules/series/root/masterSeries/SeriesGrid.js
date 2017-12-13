import React from 'react';
import SerieCard from './seriesGrid/SerieCard'

const SeriesGrid = ({ series }) =>
    <div>
        { series.map(serie => 
            <SerieCard 
                key={ serie.id } 
                serie={ serie } 
            />) 
        }
    </div>

export default SeriesGrid
