import express from 'express';
import cors from 'cors';

import { router } from './router';
import {} from './database';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/api', router);

app.listen(port);

console.log(`Listening at: ${port}`);
