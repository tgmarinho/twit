'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', 'User.hashPassword')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  followers () {
    return this.belongsToMany(
      'App/Models/User',
      'user_id',
      'follower_id'
    ).pivotTable('user_followers')
  }

  following () {
    return this.belongsToMany(
      'App/Models/User',
      'follower_id',
      'user_id'
    ).pivotTable('user_followers')
  }
}

module.exports = User
