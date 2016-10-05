
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

schema {
  query: Query
}
`
export default [typeDefinitions]