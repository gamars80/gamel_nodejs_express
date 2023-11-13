const model = require('../models/users.model');


function getUsers(req, res) {
    res.send(model);
}

function getUser(req, res) {
    const userId = Number(req.params.userId);
    const user = model[userId];
    if(user) {
        res.status(200).json(user);
    }else{
        res.sendStatus(404).json({error: "Not User Found"});
    }
}

function postUser(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: "Missing User Name"
        });
    }

    const newUser = {
        id: model.length,
        name: req.body.name
    }

    model.push(newUser)
    res.json(newUser)
}

module.exports = {
    getUsers,
    getUser,
    postUser
}