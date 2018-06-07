'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create').validator('CreateUser')

Route.post('/sessions', 'SessionController.create').validator('CreateSession')
