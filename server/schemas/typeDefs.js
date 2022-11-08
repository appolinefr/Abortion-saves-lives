const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Comment {
    _id: ID
    commentBody: String
    commentAuthor: String
    createdAt: String
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
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
    surgicalAbortion: String
    medicalAbortion: String
    cost: String
    reviews: [Review]
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments: [Comment]
    comment(commentId: ID!): Comment
    facilities: [Facility]
    facility(facilityId: ID!): Facility
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentBody: String!): Comment
    addReview(facilityId: ID!, reviewText: String!): Facility
    removeComment(commentId: ID!): Comment
    removeReview(facilityId: ID!, reviewId: ID!): Facility
  }
`;


module.exports = typeDefs;