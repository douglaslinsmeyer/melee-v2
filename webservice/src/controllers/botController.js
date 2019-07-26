import Bot from '../models/bot';
import permitter from '../services/security/permitter';

let controller = {};
let botPermitter = permitter.getPermitter('bot');

controller.index = (req, res) => {
    res.send(`Hello, ${req.user.name}.`);
};

controller.update = async (req, res) => {
    try {
        let bot = await Bot.findByIdAndUpdate(req.body.bot.id, req.body.bot, { new: true, });
        if (!bot) {
            res.status(400).send({ error: "Update failed.", });
        }

        if (!botPermitter.canUpdate(bot, req.user)) {
            res.status(401).send('Unauthorized.');
        }
        
        res.send(bot);
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: "Server error, update failed.", });
    }
};

controller.create = (req, res) => {
    let bot = new Bot({
        name: req.body.name,
        url: req.body.url,
        owner: req.user.id,
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