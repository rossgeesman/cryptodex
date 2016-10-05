console.log({ starting: true })

import express from 'express'
import cors from 'cors'
import { apolloServer } from 'graphql-tools'
import schema from './data/schema'
import resolvers from './data/resolvers'

const PORT = 3000

const graphQLServer = express().use('*', cors())

graphQLServer.use('/graphql', apolloServer((_) => {
  // FIXME: use passport etc. for authentication
  return {
    graphiql: true,
    pretty: true,
    schema,
    resolvers
  }
}))

// eslint-disable-next-line
graphQLServer.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
))
