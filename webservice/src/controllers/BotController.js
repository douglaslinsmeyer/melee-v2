import Bot from '../models/bot';
import permitter from '../services/security/permitter';
import logger from '../logger';

let controller = {};
let botPermitter = permitter.getPermitter('bot');

controller.index = (req, res) => {
    return res.send(`Hello, ${req.user.name}.`);
};

controller.update = async (req, res) => {
    try {
        let bot = await Bot.findByIdAndUpdate(req.body.bot.id, req.body.bot, { new: true, });
        if (!bot) {
            return res.status(400).send({ error: "Update failed.", });
        }

        if (!botPermitter.canUpdate(bot, req.user)) {
            return res.status(401).send('Unauthorized.');
        }

        return res.send(bot);
    } catch (err) {
        return res.status(400).send({ error: "Server error, update failed.", });
    }
};

controller.create = (req, res) => {
    let bot = new Bot({
        name: req.body.name,
        url: req.body.url,
        owner: req.user,
    });

    if (!botPermitter.canCreate(bot, req.user)) {
        return res.status(401).send('Unauthorized.');
    }

    bot.save(err => {
        if (err) {
            res.status(400).send({ error: err.message, });
        }

        return res.send(bot);
    });
};

export default controller;
