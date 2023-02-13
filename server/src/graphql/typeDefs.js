import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    signup(
      email: String!
      username: String!
      password: String!
      confirmPassword: String!
    ): User
    login(email: String!, password: String!): AuthPayload
    handleRefreshToken: Token
    handleLogout: User
  }

  type User {
    _id: ID
    email: String
    username: String
  }

  type Token {
    token: String
  }

  type AuthPayload {
    accessToken: String
    user: User
    refreshToken: String
  }
`;
