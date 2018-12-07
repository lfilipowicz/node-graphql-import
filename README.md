# node-graphql-import

## Installation
```
npm install --save react-testing-library
yarn add react-testing-library
```

## Details

imports .graphql or .gql files from folder and convert them into graphql tag.

## Example
```typescript
import path from "path";
import SchemaRequire from "node-graphql-import";
import { ApolloServer } from "apollo-server-express";

const RootSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema") });

const TypeSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/type") });

const InputSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/input") });

const EnumSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/enum") });

const server = new ApolloServer({
  typeDefs: [RootSchema, TypeSchema,InputSchema, EnumSchema],
  resolvers,
});
```