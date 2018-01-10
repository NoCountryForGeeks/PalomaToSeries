import React from 'react';
import Info from './detailSerie/Info';
import Actors from './detailSerie/actors';
import Seassons from './detailSerie/Seassons';
import detailSerieStyles from './detailSerie.scss';

const DetailSerie = ({ props: { serie } }) =>
    <div className={ detailSerieStyles.detailSerie }>
        <div className={ detailSerieStyles.detailSerieContainner }>
            <Info serie={ serie } />
            <div className={ detailSerieStyles.columns }>
                <Seassons seassons={ serie.seassons } />
                <Actors actors={ serie.actors } />
            </div>
        </div>
    </div>

export default DetailSerie;