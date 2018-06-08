'use strict'

const Schema = use('Schema')

class UserFollowerSchema extends Schema {
  up () {
    this.create('user_followers', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')
      table
        .integer('follower_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_followers')
  }
}

module.exports = UserFollowerSchema
