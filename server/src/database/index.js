import mongoose from 'mongoose';

import {} from '../domain';
import { configuration } from '../../config';

const { url } = configuration.database;

mongoose.Promise = global.Promise;
mongoose.connect(url);
