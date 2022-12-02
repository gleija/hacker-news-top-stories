import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    stories(cursor: Int!): [Story!]
  }

  type Story {
    author: Author!
  }

  type Author {
    id: ID!
    by: String!
    title: String!
    url: String
  }
`;
