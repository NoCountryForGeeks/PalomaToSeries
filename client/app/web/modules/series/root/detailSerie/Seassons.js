import React from 'react';
import SeassonSF from '../../../../../modules/series/root/detailSerieFS/SeassonSF';
import Seasson from './seassons/Seasson';
import seassonsTyles from './seassons.scss';

const Seassons = ({ seassons }) => 
    <div className={ seassonsTyles.seassons }>
        { seassons.map(seasson => 
                <SeassonSF 
                    render={ Seasson } 
                    key={ seasson.seassonId } 
                    seasson={ seasson } 
                />) 
        }
    </div>

export default Seassons;