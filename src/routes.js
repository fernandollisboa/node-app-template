import { Router } from 'express';
import connection from './database/connection.js';

const routes = Router();

routes.get('/health', (req, res) => res.send('Tudo massa meu rei').status(200));

routes.post('/health', async (req, res) => {
  const { testeId } = req.body;
  const createdTest = await connection.query('INSERT INTO teste VALUES ($1) RETURNING *;', [
    testeId,
  ]);
  const created = createdTest.rows[0].id;
  console.log(created);
  return res.status(201).send({ created });
});

export default routes;
