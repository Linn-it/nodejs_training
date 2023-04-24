import express from 'express';
import { allMovie, delMovie, postMovie, singleMovie, updateMovie } from '../controllers/movieController.js';
const router = express.Router();

router.route('/movies')
    .get(allMovie)
    .post(postMovie)

router.get('/movies/:id',singleMovie)

router.put('/movies/:id',updateMovie)

router.delete('/movies/:id',delMovie)

export default router;