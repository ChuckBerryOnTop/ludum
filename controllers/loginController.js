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
    console.log(req.body)
    db.Login
      .getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
        console.log('method')
        console.log('ga: '+JSON.stringify(arguments));
        if (err) throw err;

        // login was successful if we have a user
        if (user) {
            // handle login success
            console.log('login success');
            return;
        }

        // otherwise we can determine why we failed
        var reasons = db.Login.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                break;
            case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                break;
        }
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
      // .catch(err => res.status(422).json(err));
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
