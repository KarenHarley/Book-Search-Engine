const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type BookInput {
    author: [String]!
    description: String!
    title: String!
    bookId: ID!
    image: String!
    link: String!
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
    bookId: ID!
    authors [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    #is it just 1 or more?
    # me: [User]!
    me(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
