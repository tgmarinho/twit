'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create').validator('CreateUser')

Route.post('/sessions', 'SessionController.create').validator('CreateSession')

/**
 * Authenticated routes
 */
Route.group(() => {
  Route.put('/users/:id', 'UserController.update').validator('UpdateUser')

  Route.post('/tweets', 'TweetController.create')
  Route.delete('/tweets/:id', 'TweetController.destroy')
}).middleware(['auth'])
