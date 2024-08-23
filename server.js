import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

const database = new DatabasePostgres;

// database.create(); // POST
// database.read(); // GET
// database.update(); // PUT
// database.delete(); // DELETE

//Endpoints
server.get('/', async () => {
  const artigos = database.read();
  return 'Frango do G';
});

server.get('/senai', () => {
  return 'Monopólio do G';
});

server.listen({
  port: 3333,
})