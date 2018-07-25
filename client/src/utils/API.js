import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getLogin: function(userName) {
    console.log('click')
    return axios.get("/api/login/", userName);
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
