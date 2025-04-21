// backend/routes/service.routes.js
import { getAllServices , createService } from '../controllers/service.controller.js';

async function serviceRoutes(fastify, options) {
  fastify.get('/api/services', getAllServices);
  fastify.post('/api/services', createService);
}

export default serviceRoutes;