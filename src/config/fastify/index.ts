import type { FastifyServerOptions } from 'fastify';

export const options: FastifyServerOptions = {
  logger: {
    prettyPrint:
      process.env.NODE_ENV === 'development'
        ? {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname'
          }
        : false,
    serializers: {
      res(reply) {
        // The default
        return {
          statusCode: reply.statusCode
        };
      },
      req(request) {
        return {
          method: request.method,
          url: request.url,
          path: request.routerPath,
          parameters: request.params,
        };
      }
    }
  }
};
