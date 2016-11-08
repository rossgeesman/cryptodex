console.log({ starting: true })

import express from 'express'
import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'
import uuid from 'node-uuid'
import cors from 'cors'
import { apolloServer } from 'graphql-tools'
import schema from './data/schema'
import resolvers from './data/resolvers'


let flash = require('connect-flash')
var morgan = require('morgan')
const PORT = 3001
require('./auth.js')


// GraphQL Endpoint

const graphQLServer = express().use('*', cors())

graphQLServer.use(session({
  genid: function(req) {
    return uuid.v4()
  },
  secret: 'kvbKdrL27ZvhPsYzyR2V'
}))

graphQLServer.use(passport.initialize())
graphQLServer.use(passport.session())
graphQLServer.use(flash())
graphQLServer.use(morgan('combined'))

graphQLServer.use('/graphql', apolloServer((req) => {
  const context = {
    user: req.user,
  }
  
  return {
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
    context
  }

}))

// Login route

graphQLServer.use(bodyParser.urlencoded({ extended: true }) )
graphQLServer.use(bodyParser.json())
graphQLServer.post('/login', 
  function(req, res, next) { 
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      req.login(user, function(err) {
        if (err) { return next(err) }
        return res.status(200).send(user)
      })
    })(req, res, next)
  }
)


// eslint-disable-next-line
graphQLServer.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
))
