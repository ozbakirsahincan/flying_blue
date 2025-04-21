import Fastify from 'fastify';
import dotenv from 'dotenv';
import serviceRoutes from './routes/service.routes.js';

dotenv.config();
const fastify = Fastify({ logger: true });

// routes
fastify.register(serviceRoutes);

const PORT = process.env.PORT || 5001;

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening on ${address}`);
});