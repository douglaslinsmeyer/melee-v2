import UserModel from '../models/user';

let controller = {};

controller.update = async (req, res) => {
    try {
        let user = await UserModel.findByIdAndUpdate(req.body.user.id, req.body.user, { new: true, });
        
        if (!user) {
            res.status(400).send({ error: "Update failed.", });
        }

        res.send(user);
    } catch (err) {
        res.status(400).send({ error: "Server error, update failed.", });
    }
};

export default controller;