// Description:
//   Cuteme is the most important thing in life
//
// Configuration:
//   None
//
// Commands:
//   hubot pug me - gets a pug
//   hubot pug bomb N - gets N pugs
//

module.exports = function (robot) {
  const nFetch = require('node-fetch')

  const PUGME_SERVICE = 'https://dog.ceo/api'

  const CUTIES_LIMIT = parseInt(process.env.CUTIES_LIMIT, 10) || 5

  robot.respond(/pug me/i, async (msg) => {
    await nFetch(`${PUGME_SERVICE}/breed/pug/images/random`)
      .then(res => res.json())
      .then(json => msg.send(json.message))
      .catch(err => robot.logger.error(`Failed to request a pug: ${err}`))
  })

  robot.respond(/pug bomb( (\d+))?/i, async (msg) => {
    const count = msg.match[2] || 5

    if (count > CUTIES_LIMIT) {
      msg.send(`The maximum number of pugs is limited to ${CUTIES_LIMIT}`)
      return
    }

    await nFetch(`${PUGME_SERVICE}/breed/pug/images/random/${count}`)
      .then(res => res.json())
      .then(json => Array.from(json.message).map((pug) => msg.send(pug)))
      .catch(err => robot.logger.error(`Failed to request ${count} pugs: ${err}`))
  })
}