import React from 'react';
import SeassonSF from '../../../../../modules/series/root/detailSerieFS/SeassonSF';
import Seasson from './seassons/Seasson';

const Seassons = ({ seassons }) => 
    <div>
        { seassons.map(seasson => 
                <SeassonSF 
                    render={ Seasson } 
                    key={ seasson.seassonId } 
                    seasson={ seasson } 
                />) 
        }
    </div>

export default Seassons