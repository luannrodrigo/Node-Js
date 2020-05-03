import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
// Usar o use para não precisar os paramtros da url idepentente do method resquest
routes.use('/appointments', appointmentsRouter);

export default routes;
