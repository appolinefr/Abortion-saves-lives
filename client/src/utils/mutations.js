import { gql } from "@apollo/client";

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

export const ADD_FACILITY = gql`
  mutation addFacility(
    $name: String!,
    $address: String!,
    $phone: String!
  ) {
    addFacility(
      name: $name
      address: $address
      phone: $phone
    ) {
      _id
      name
      address
      phone
      surgicalAbortion
      medicalAbortion
      cost
      reviews
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($facilityId: ID!, $reviewText: String!) {
    addReview(facilityId: $facilityId, reviewText: $reviewText) {
      _id
      name
      address
      phone
      surgicalAbortion
      medicalAbortion
      cost
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($facilityId: ID!, $reviewId: ID!) {
    removeReview(facilityId: $facilityId, reviewId: $reviewId)
  }
`;
