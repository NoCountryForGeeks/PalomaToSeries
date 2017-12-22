import React from 'react';
import { ScrollView } from 'react-native';
import Info from './detailSerie/Info';
import Seassons from './detailSerie/Seassons';
import Actors from './detailSerie/Actors';

const DetailSerie = ({ serie }) => 
    <ScrollView>
        <Info serie={ serie } />
        <Seassons seassons={ serie.seassons } />
        <Actors actors={ serie.actors } />
    </ScrollView>

export default DetailSerie;