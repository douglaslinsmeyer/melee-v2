import UserModel from '../models/user';
import permitter from '../services/security/permitter';

let controller = {};
let userPermitter = permitter.getPermitter('user');

controller.update = async (req, res) => {
    try {
        let user = await UserModel.findByIdAndUpdate(req.body.user.id, req.body.user, { new: true, });
        
        if (!userPermitter.canUpdate(user, req.user)) {
            res.status(401).send('Unauthorized.');
        }

        if (!user) {
            res.status(400).send({ error: "Update failed.", });
        }

        res.send(user);
    } catch (err) {
        res.status(400).send({ error: "Server error, update failed.", });
    }
};

export default controller;