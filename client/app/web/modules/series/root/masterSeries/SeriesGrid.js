import React from 'react';
import SerieCard from './seriesGrid/SerieCard';
import seriesGridStyles from './seriesGrid.scss';

const SeriesGrid = ({ series }) =>
    <div className={ seriesGridStyles.seriesGrid }>
        { series.map(serie => 
            <SerieCard 
                key={ serie.id } 
                serie={ serie } 
            />) 
        }
    </div>

export default SeriesGrid;
