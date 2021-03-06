[![Build Status](https://travis-ci.com/lfilipowicz/node-graphql-import.svg?branch=master)](https://travis-ci.com/lfilipowicz/node-graphql-import)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![npm](https://img.shields.io/npm/v/node-graphql-import.svg)
[![Coverage Status](https://coveralls.io/repos/github/lfilipowicz/node-graphql-import/badge.svg?branch=master)](https://coveralls.io/github/lfilipowicz/node-graphql-import?branch=master)

# node-graphql-import

## Installation

```
npm install --save react-testing-library
yarn add react-testing-library
```

## Details

imports .graphql or .gql files from folder and convert them into graphql tag.

## Options

filesPath - path to folder

fileTag - part of filename // only files containing the fileTag in the name will be imported (.ie fileTag TYPE imports only UserTYPE.graphql, PostTYPE.graphql etc, PostENUM.graphql will not be imported )

## Example

```javascript
example file structure
|root
--|schema
    --Mutation.graphql
    --Query.graphql
----|type
    --UserTYPE.graphql
----|input
    --UserINPUT.graphql
----|enum
    --UserStatusENUM.graphql
----|custom
    --UserCUSTOM.graphql
```

```javascript
import path from "path";
import SchemaRequire from "node-graphql-import";
import { ApolloServer } from "apollo-server-express";

const RootSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema") });
const TypeSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/type") });
const InputSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/input") });
const EnumSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/enum") });
const CustomSchema = SchemaRequire({ filesPath: path.join(__dirname,"./schema/custom"), "CUSTOM"});

const server = new ApolloServer({
  typeDefs: [RootSchema, TypeSchema,InputSchema, EnumSchema],
  resolvers,
});
```
