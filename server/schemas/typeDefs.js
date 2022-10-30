const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentTitle: String
    commentBody: String
    createAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments(username: String!): [Comment]
    comment(commentId: ID!): Comment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentTitle: String!, commentBody: String!): Comment
    updateComment(commentId: ID!, commentBody: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;