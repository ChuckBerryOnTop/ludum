const router = require("express").Router();
const controller= require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(controller.findByUser)
  //.post(controller.create);
 /* .post('/', function(req, res) {
    controller.findByUser(req);
  })*/
 /* .get(function(req, res) {
    controller.findByUser(req, res);
    console.log(req.body)
  })*/
// Matches with "/api/login/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
