import UserModel, { userRoles } from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const controller = {};

controller.authenticate = async (req, res) => {
    let sendUnauthorizedResponse = () => {
        res.status(401).send('Authentication failed.');
    };

    if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')) {
        sendUnauthorizedResponse();
    }

    let user = await UserModel.findOne({ email: req.body.email, }, 'password');
    if (!user) {
        sendUnauthorizedResponse();
    }
    
    let passwordMatches = await bcrypt.compare(req.body.password, user.password);
    if (false === passwordMatches) {
        sendUnauthorizedResponse();
    }
    
    const token = jwt.sign({ data: { email: req.body.email, }, }, process.env.APP_SECRET, { expiresIn: "24h", });
    res.status(200).send({ token: token, });
};

controller.register = async (req, res) => {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        roles: [ userRoles.USER, ],
    });

    try {
        user = await user.save();
        res.status(201).send(user);
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send({ error: "That email address is already registered.", });
        }

        res.status(500).send(err);
    }
};

export default controller;