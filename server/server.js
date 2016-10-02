'use strict'
console.log({ starting: true })

import express from 'express'
import bodyParser from 'body-parser'
import { apolloExpress } from 'apollo-server'

const PORT = 3000

const app = express()

app.use('/graphql', bodyParser.json(), apolloExpress({ schema: myGraphQLSchema }))


app.listen(3000, () => {
  console.log({ running: true })
})
