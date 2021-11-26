/* eslint-disable no-bitwise */
import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import connection from '../src/database/connection.js';

const agent = supertest(app);
describe('GET /health', () => {
  afterAll(async () => {
    await connection.query('DELETE FROM teste;');
    connection.end();
  });

  it('returns 204 for checking system health', async () => {
    const result = await agent.get('/health');
    expect(result.status).toEqual(200);
  });

  it('returns 200 for creating new teste', async () => {
    const testeId = (Math.random() * 10) << 0;
    const body = { testeId };
    const result = await agent.post('/health').send(body);
    expect(result.status).toEqual(202);
  });
});
