'use strict'

class UpdateUser {
  get rules () {
    return {
      username: `unique:users,username,id,${this.ctx.params.id}`,
      email: `email|unique:users,email,id,${this.ctx.params.id}`,
      confirmPassword: 'required_if:password|same:password'
    }
  }
}

module.exports = UpdateUser
