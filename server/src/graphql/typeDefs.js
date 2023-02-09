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
  }

  type User {
    _id: ID
    email: String
    username: String
  }

  type AuthPayload {
    token: String
    user: User
  }
`;
