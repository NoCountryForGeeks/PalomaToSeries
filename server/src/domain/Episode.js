import { Schema } from 'mongoose';

import { Image } from './Image';

const EpisodeSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    image: Image
});

export { EpisodeSchema }
