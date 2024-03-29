import { gql } from "@apollo/client";

export const CREATE_USER = gql `
    mutation($email: String!, $username: String!, $password: String!, $confirmPassword: String!){
  signup(email: $email, username: $username, password: $password, confirmPassword: $confirmPassword) {
    _id
    email
    username
  }
}
`
export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        _id
        email
        username
      }
      refreshToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation {
    handleRefreshToken {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const HANDLE_LOGOUT = gql`
  mutation {
    handleLogout {
      _id
      email
      username
    }
  }
`;