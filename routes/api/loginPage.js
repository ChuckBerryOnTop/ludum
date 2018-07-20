const router = require("express").Router();
const controller= require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(controller.findByUser)
  .post(controller.create);

  router.route("/auth")
  .post(controller.findByUser)

// Matches with "/api/login/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
