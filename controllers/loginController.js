const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Login
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findByUser: function(req, res) {
    db.Login
      .getAuthenticated(req.body.username, req.body.password, function (hello){
        console.log("made it here");
        console.log(hello);
      })
      // .then(function(login){
        
      //   console.log(login);
      //   console.log(login.password);
      //   console.log(req.body.password);
      //   if(login.password === req.body.password){
      //     console.log("success!!!")
      //   }
      // })

      
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //creates username and password
  create: function(req, res) {
    db.Login
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Login
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Login
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
