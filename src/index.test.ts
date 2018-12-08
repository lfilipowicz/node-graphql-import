jest.mock('fs');
import SchemaRequire from './index';

beforeEach(() => {
  require('fs').__setMockFiles({
    './schema/SomeGraphql.graphql': 'SomeFileENUM',
    './schema/SomeGql.gql': 'SomeFileTYPE',
    './schema/wrongFileType.jpg': 'WrongFileType',
    './schema/SomeFileWithTYPE.gql': 'WrongFileType',
    './schema/SomeFileWithENUM.gql': 'WrongFileType',
  });
});

test('should import only files with .graphql and .gql extension', function() {
  const files = SchemaRequire({ filesPath: './schema' });
  expect(files).toEqual('filefilefilefile');
});

test('should import only files with .graphql and .gql and fileTag', function() {
  const files = SchemaRequire({ filesPath: './schema', fileTag: 'TYPE' });
  expect(files).toEqual('file');
});
