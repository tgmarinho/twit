'use strict'

const Raven = require('raven')

const Env = use('Env')
const Config = use('Config')
const Youch = use('youch')

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response, view }) {
    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)

      const errorJSON = await youch.toJSON()
      response.status(error.status).send(errorJSON)
      return
    }

    // Production error
    response.status(error.status).send(view.render('errors.index'))
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
    if (Env.get('NODE_ENV') === 'production') {
      Raven.config(Config.get('services.sentry.dsn'))
      Raven.captureException(error)
    }
  }
}

module.exports = ExceptionHandler
