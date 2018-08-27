const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: String
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

  input UserUpdateInput {
    firstName: String
    lastName: String
    password: String
  }

  type Query {
    users: [User]
    user(_id: String): User
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(input: UserUpdateInput): User
  }
`;
