import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentId: ID!, $commentBody: String!) {
    addComment(commentId: $commentId, commentBody: $commentBody) {
      _id
      commentBody
      createAt
    }
  }
`;

export const ADD_FACILITY = gql`
  mutation addFacility(
    $facilitytId: ID!
    $name: String!
    $address: String!
    $phone: String!
  ) {
    addFacility(facilitytId: $facilitytId, name: $name, address: $address, phone: $phone) {
      _id
      name
      address
      phone
      surgicalAbortion
      medicalAbortion
      cost
      comments
    }
  }
`;