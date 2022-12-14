import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_FACILITIES = gql`
  query getFacilities {
    facilities {
      _id
      name
      address
      phone
      medicalAbortion
      surgicalAbortion
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

export const QUERY_SINGLE_FACILITY = gql`
  query getFacility($facilityId: ID!) {
    facility(facilityId: $facilityId) {
      _id
      name
      address
      phone
      medicalAbortion
      surgicalAbortion
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


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
