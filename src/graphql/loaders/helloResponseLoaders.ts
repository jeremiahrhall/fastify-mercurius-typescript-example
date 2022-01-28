import type { MercuriusLoaders } from 'mercurius';

export const HelloResponse: MercuriusLoaders['HelloResponse'] = {
  anotherField: {
    async loader(queries, ctx) {
      return queries.map((q) => `Duplicated: ${q.obj.message}`);
    },
    opts: { cache: false }
  }
};
