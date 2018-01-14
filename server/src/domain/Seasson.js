import { Schema } from 'mongoose';

import { EpisodeSchema } from './Episode';

const SeassonSchema = new Schema({
    seassonId: { type: Number },
    seasson: { type: Number },
    episodes: [ EpisodeSchema ]
});

export { SeassonSchema }
