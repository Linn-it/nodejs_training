import express from 'express';
import { createUser, deleteUser, findUser, getUser, updateUser } from '../controllers/bookController';

const router = express.Router();

router.route('/books')
    .get(getUser)
    .post(createUser)

router.get('/books/:id',findUser);

router.put('/books/:id',updateUser);

router.delete('/books/:id',deleteUser);

export default router;