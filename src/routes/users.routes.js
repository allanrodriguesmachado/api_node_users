const { Router } = require("express");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Your passed is Middleware")
  if (!request.body.isAdmin) {
    return response.json({
      message: "user unauthorized"
    })
  }

  next();
}


const UserController = require("../controllers/UsersController")

const userController = new UserController();

usersRoutes.post("/", myMiddleware, userController.create);

module.exports = usersRoutes;