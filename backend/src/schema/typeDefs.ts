export const typeDefs = `
 type User {
  id: ID!
  username: String!
  email: String!
}

type Video {
  title: String!
  thumbnailUrl: String!
  videoUrl: String!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  createdAt: String!
}

type Item {
  type: String!
  name: String!
  price_inr: Int!
  image: String!
  thumbnail: String!
}

type soilRes {
  soil: String!
  suitableCrops: [String!]!
}

type Query {
  posts: [Post!]!
  videos: [Video]!
  marketplace(number: Int!): [Item]!
  authenticate(token: String!): User
  soilResults(list: [Float]): soilRes
}

type authenticate {
  user: User
  token: String
}

type Mutation {
  signup(username: String!, email: String!, password: String!): String
  login(email: String!, password: String!): authenticate
  createPost(title: String!, content: String!, token: String!): Post
} 
`;
