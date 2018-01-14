import express from 'express';

import { Serie, serieProjection } from '../domain';

const router = express.Router();

router.get('/', (_, response) =>
    response.json({ message: 'Api is working' })
);

router.route('/series')
    .get(({ query }, response) => {
        let findBy = {};
        if (query.title) {
            findBy = { title: new RegExp(query.title, 'ig')};
        }

        return Serie.find(findBy, serieProjection).limit(20)
             .exec((_, series) => response.json(series))
    });

router.route('/series/:id')
    .get(({ params: { id } }, response) =>
        Serie.findOne({ id })
             .exec((_, serie) => response.json(serie)))

export { router };
