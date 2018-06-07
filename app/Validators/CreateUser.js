'use strict'

class CreateUser {
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = CreateUser
