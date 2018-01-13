import mongoose, { Schema } from 'mongoose';
import { Image } from './Image';
import { ActorSchema } from './Actor';
import { SeassonSchema } from './Seasson';

const SerieSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  language: { type: String },
  image: Image,
  actors: [ ActorSchema ],
  seassons: [ SeassonSchema ]
});

const serieProjection = {
    __v: false,
    _id: false,
    actors: false,
    seassons: false,
}

const Serie = mongoose.model('Serie', SerieSchema);

export { Serie, serieProjection }
