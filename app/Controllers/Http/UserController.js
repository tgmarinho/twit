'use strict'

const User = use('App/Models/User')

class UserController {
  async me ({ auth }) {
    const user = await auth.getUser()

    await user.loadMany(['following', 'followers'])

    return user
  }

  async create ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)

    return user
  }

  async update ({ request, auth }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await auth.getUser()

    if (user.id !== Number(request.params.id)) {
      throw new Error('Cannot update profile')
    }

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
