import { join } from 'path';
import { readFileSync } from 'fs';

export const schema = readFileSync(join(process.cwd(), 'schema', 'schema.graphqls'), { encoding: 'utf-8' }).toString();
