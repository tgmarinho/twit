'use strict'

const Tweet = use('App/Models/Tweet')

class TweetController {
  async create ({ request, auth }) {
    const { content } = request.all()
    const { id } = await auth.getUser()

    const tweet = await Tweet.create({ content, user_id: id })

    return tweet
  }
}

module.exports = TweetController
