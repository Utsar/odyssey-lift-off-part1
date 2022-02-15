import { gql } from "apollo-server";

const typeDefs = gql`
  "schema def goes here"
  type Query {
    "get tracks array for homepage"
    tracksForHome: [Track!]!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDefs;
