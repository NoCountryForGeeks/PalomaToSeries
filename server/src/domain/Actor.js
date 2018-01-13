import { Schema } from 'mongoose';

import { Person } from './Person';

const ActorSchema = new Schema({
    person: Person,
    character: Person
});

export { ActorSchema }
