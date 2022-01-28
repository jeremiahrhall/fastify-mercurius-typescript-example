import Fastify from 'fastify';
import mercurius from 'mercurius';

import { options } from './config/fastify';
import { context } from './graphql/context';
import { loaders } from './graphql/loaders';
import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';

const app = Fastify(options);

app.register(mercurius, {
  loaders,
  schema,
  resolvers,
  context,
  graphiql: true
});

app.listen(8081);

if (process.env.NODE_ENV !== 'production') {
  const targetPath = './src/graphql/generated.ts';
  import('mercurius-codegen').then(async ({ default: mercuriusCodegen }) => {
    return mercuriusCodegen(app, {
      targetPath,
      silent: true
    })
      .then((res) => app.log.info(`GraphQL schema types written to ${targetPath}`))
      .catch(app.log.error);
  });
}
