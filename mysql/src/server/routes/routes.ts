import express, { Router } from 'express';
import { getAllFilms } from '../database/filmsQueries';

const router = express();

router.get('/', getAllFilms);

export default router;