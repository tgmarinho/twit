'use strict'

const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', table => {
      table.increments()
      table.string('content', 140).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
