'use strict'

class CreateSession {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = CreateSession
