const { Router } = require("express");

const usersRoutes = Router();

const UserController = require("../controllers/UsersController")

const userController = new UserController();

usersRoutes.post("/", userController.create);


module.exports = usersRoutes;