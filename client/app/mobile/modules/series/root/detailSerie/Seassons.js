import React from 'react';
import { View } from 'react-native';
import SeassonSF from 'modules/series/root/detailSerieFS/SeassonSF';
import Seasson from './seassons/Seasson';

const Seassons = ({ seassons }) => 
    <View>
        { seassons.map(seasson => 
            <SeassonSF 
                render={ Seasson } 
                key={ seasson.seassonId } 
                seasson={ seasson } 
            />) 
        }
    </View>

export default Seassons;