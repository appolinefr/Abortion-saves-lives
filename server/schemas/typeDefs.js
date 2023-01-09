const {gql} = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
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
    facilities: [Facility]
    facility(facilityId: ID!): Facility
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(facilityId: ID!, reviewText: String!): Facility
    removeReview(facilityId: ID!, reviewId: ID!): Facility
  }
`;


module.exports = typeDefs;