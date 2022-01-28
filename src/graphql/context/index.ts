import type { FastifyReply, FastifyRequest } from 'fastify';

export const context = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    // TODO attach decoded token/session content here for use in resolvers and loaders on mercurius context object
    authorization: req.headers.authorization,
    ...req.context
  };
};

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module 'mercurius' {
  interface MercuriusContext extends PromiseType<ReturnType<typeof context>> {}
}
