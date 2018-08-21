const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    fullName: String
    avatar: String
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;
