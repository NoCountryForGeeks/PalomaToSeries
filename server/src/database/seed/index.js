import mongoose from 'mongoose';

import series from './data/series.json';
import { Serie }  from '../../domain';

import { configuration } from '../../../config';

const { url } = configuration.database;

mongoose.Promise = global.Promise;
console.log(url);
mongoose.connect(url);

Serie.insertMany(series)
     .then(() => {
         mongoose.connection.close();
         console.log('Seed finished OK!');
         process.exit(0); //eslint-disable-line
     })
     .catch(error => {
         mongoose.connection.close();
         console.log(`Seed finished with errors: ${error}`);
         process.exit(1); //eslint-disable-line
});
