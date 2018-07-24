import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the correct user and authorizes them
  getLogin: function(data) {
    return axios.post("/api/login/auth/", data)
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
