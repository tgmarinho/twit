'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create').validator('CreateUser')
Route.put('/users/:id', 'UserController.update')
  .validator('UpdateUser')
  .middleware(['auth'])

Route.post('/sessions', 'SessionController.create').validator('CreateSession')

Route.post('/tweets', 'TweetController.create').middleware(['auth'])
