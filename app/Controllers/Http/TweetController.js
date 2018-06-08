'use strict'

const Tweet = use('App/Models/Tweet')

class TweetController {
  async create ({ request, auth }) {
    const { content } = request.all()
    const { id } = await auth.getUser()

    const tweet = await Tweet.create({ content, user_id: id })

    return tweet
  }

  async destroy ({ request, auth }) {
    const { id } = await auth.getUser()
    const tweet = await Tweet.find(request.params.id)

    if (tweet.user_id !== id) throw new Error("Can't delete tweet")

    tweet.delete()

    return tweet
  }
}

module.exports = TweetController
