// backend/controllers/service.controller.js
import { prisma } from '../lib/prisma.js';

export const getAllServices = async (request, reply) => {
  const services = await prisma.service.findMany();
  reply.send(services);
};

export const createService = async (request, reply) => {
  const { name, image, description, serviceCode, isActive } = request.body;

  try {
    const newService = await prisma.service.create({
      data: {
        name,
        image,
        description,
        serviceCode,
        isActive,
      },
    });

    reply.code(201).send(newService);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to create service', details: error.message });
  }
};