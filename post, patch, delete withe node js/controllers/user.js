const User = require("../models/user");


async function handleGetAllUser (req, res) {
    const allDBUsers = await User.find({ });
    return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
   if(!user) return res.status(400).json({error: "user not found"});
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, "change");
    return res.json({status:"success"});
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id,);
    return res.json({status:"success"});
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        university: body.university,
        hall: body.hall,
        gender: body.gender,

    });

    console.log(result);
    return res.status(201).json({msg: "Success", id: result._id});
}

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
    
};