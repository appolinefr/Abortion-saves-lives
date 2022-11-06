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
    commentBody: String
    commentAuthor: String
    createAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Facility {
    _id: ID
    name: String
    address: String
    phone: String
    surgicalAbortion: Boolean
    medicalAbortion: Boolean
    cost: String
    comments: [Comment]
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments(username: String!): [Comment]
    comment(commentId: ID!): Comment
    facilities: [Facility]
    facility(facilityId: ID!): Facility
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentBody: String!, commentAuthor: String!): Comment
    addFacility(name: String!, address: String!, phone: String!): Facility
  }
`;

module.exports = typeDefs;