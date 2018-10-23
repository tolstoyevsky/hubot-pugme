// Description:
//   Pugme is the most important thing in life
//
// Configuration:
//   None
//
// Commands:
//   begin group Pugme
//   hubot pug me - gets a pug
//   hubot pug bomb N - gets N pugs
//   end group
//

module.exports = function(robot) {
    const nFetch = require('node-fetch');

    const SERVICE_URL = "http://pugme.herokuapp.com";
    const PUGS_LIMIT = parseInt(process.env.PUGS_LIMIT, 10) || 5;

    robot.respond(/pug me/i, async (msg) => {
        await nFetch(`${SERVICE_URL}/random`)
            .then(res => res.json())
            .then(json => msg.send(json.pug))
            .catch(err => robot.logger.error(`Failed to request a pug: ${err}`));
    });

    robot.respond(/pug bomb( (\d+))?/i, async (msg) => {
        const count = msg.match[2] || 5;

        if (count > PUGS_LIMIT) {
            msg.send(`The maximum number of pugs is limited to ${PUGS_LIMIT}`);
            return;
        }

        await nFetch(`${SERVICE_URL}/bomb?count=${count}`)
            .then(res => res.json())
            .then(json => Array.from(json.pugs).map((pug) => msg.send(pug)))
            .catch(err => robot.logger.error(`Failed to request ${count} pugs: ${err}`));
    });

    return robot.respond(/how many pugs are there/i, async (msg) => {
        await nFetch(`${SERVICE_URL}/count`)
            .then(res => res.json())
            .then(json => msg.send(`There are ${json.pug_count} pugs.`))
            .catch(err => robot.logger.error(`Failed to request the number of pugs: ${err}`));
    });
};

