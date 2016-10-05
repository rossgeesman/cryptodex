const User = require('../models/').User
const resolveFunctions = {
  Query: {
    user(_, {email}) {
      return User.findOne({where: {email: email }})
        .then((user) => {
          return user
        })
    }
  },
}

export default resolveFunctions