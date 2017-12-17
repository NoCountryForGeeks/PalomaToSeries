import React from 'react';
import Info from './detailSerie/Info';
import Characters from './detailSerie/Characters';
import Seassons from './detailSerie/Seassons';
import detailSerieStyles from './detailSerie.scss';

const DetailSerie = props =>
    <div className={ detailSerieStyles.detailSerie }>
        <div className={ detailSerieStyles.detailSerieContainner }>
            <Info serie={ props.serie } />
            <div className={ detailSerieStyles.columns }>
                <Seassons seassons={ props.serie.seassons } />
                <Characters characters={ props.serie.characters } />
            </div>
        </div>
    </div>

export default DetailSerie;