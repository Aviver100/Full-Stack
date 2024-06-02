import { Request, Response, NextFunction } from 'express';
import { getAllFilms } from '../database/filmsQueries';

async function getFilms(req: Request, res: Response, next: NextFunction) {
    const films = await getAllFilms();
    return res.send({films})
}