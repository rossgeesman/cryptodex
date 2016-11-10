const User = require('../models/').User
const resolveFunctions = {
  Query: {
    user(_, {id}) {
      return User.findOne({where: {id: id }})
        .then((user) => {
          return user
        })
    }
  },
  Mutation: {
    create_user(_, {email, name, password}) {
      return User.create({email: email, name: name, password: password})
        .then((user) => {
          return user
        })
    }
  },
}

export default resolveFunctions