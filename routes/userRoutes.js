const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.signup);

router.
    route('/:id')
    .get(userController.getUserWithId)
    .patch(userController.updateUserInfo)
    .delete(userController.deleteUser);
module.exports = router;
