import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const { name, email } = request.body;
  return response.json({ message: 'hello luann' });
});

export default routes;
