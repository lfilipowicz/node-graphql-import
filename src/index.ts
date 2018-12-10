import fs from 'fs';
import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

interface IOptions {
  filesPath: string;
  fileTag?: string;
}

export default function(options: IOptions): DocumentNode {
  const { filesPath, fileTag } = options;
  const schema = fs
    .readdirSync(filesPath)
    .filter(file => file.endsWith('.graphql') || file.endsWith('.gql'))
    .filter(file => (fileTag ? file.indexOf(fileTag) !== -1 : true))
    .reduce((prev, next) => {
      const file = fs.readFileSync(`${filesPath}/${next}`, 'utf-8');
      return prev + file;
    }, '');
  return gql(schema);
}
