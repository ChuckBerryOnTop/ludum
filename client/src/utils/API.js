import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the correct user and authorizes them
  getLogin: function(req, res) {
    console.log(req)
    console.log("check me!!!!")
    // return axios.get("/api/login/", {params: req})
    axios.get("/api/login/", {params: req})
    .then(function(results){ res.json(results)})
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveLogin: function(loginData) {
    console.log("successfully added login")
    return axios.post("/api/login/", loginData);
  }
};
