import UserService from '../services/UserService.js'

const UserController = {}

UserController.addUsers = async (req,res) => res.send(await UserService.addUser(req.body));

export default UserController;