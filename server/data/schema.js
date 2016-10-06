
const typeDefinitions = `
type User {
  id: String!
  email: String!
  name: String!
  password: String!
}

type Query {
  user(email: String!): User
}

type Mutation {
  create_user(email: String!, name: String!, password: String!): User
}
schema {
  query: Query
  mutation: Mutation
}
`
export default [typeDefinitions]