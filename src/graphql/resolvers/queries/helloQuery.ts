import type { IResolvers } from 'mercurius';

export const helloQuery: IResolvers['Query']['hello'] = function(root, args, ctx, info) {
  const { name } = args;
  ctx.app.log.info({ name });
  return { message: 'hello ' + name };
}
