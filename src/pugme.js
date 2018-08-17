// Description:
//   Pugme is the most important thing in life
//
// Configuration:
//   None
//
// Commands:
//   hubot pug me - receives a pug
//   hubot pug bomb N - gets N pugs
//

module.exports = function(robot) {
    const SERVICE_URL = "http://pugme.herokuapp.com";

    robot.respond(/pug me/i, msg =>
        msg.http(`${SERVICE_URL}/random`)
            .get()((err, res, body) => msg.send(JSON.parse(body).pug))
    );

    robot.respond(/pug bomb( (\d+))?/i, function(msg) {
        const count = msg.match[2] || 5;

        return msg.http(`${SERVICE_URL}/bomb?count=${count}`)
            .get()((err, res, body) => Array.from(JSON.parse(body).pugs).map((pug) => msg.send(pug)));
    });

    return robot.respond(/how many pugs are there/i, msg =>
        msg.http(`${SERVICE_URL}/count`)
            .get()((err, res, body) => msg.send(`There are ${JSON.parse(body).pug_count} pugs.`))
    );
};

