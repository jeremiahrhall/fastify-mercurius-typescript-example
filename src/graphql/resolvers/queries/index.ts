import { IResolvers } from 'mercurius';

import { helloQuery } from './helloQuery';

export const Query: IResolvers['Query'] = {
  hello: helloQuery
};
