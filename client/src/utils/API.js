import axios from "axios";

export default {
 
  // Gets the correct user and authorizes them
  getLogin: function(data) {
    return axios.post("/api/login/auth/", data)
  },
  
  // Saves a book to the database
  saveLogin: function(loginData) {
    console.log("successfully added login")
    return axios.post("/api/login/", loginData);
  },

 // Gets all scores
 getScore: function() {
  return axios.get("/api/login/score/");
},

//posts the scores
postScore: function (data){
  return axios.post("/api/login/score/", data);
},

// Deletes the book with the given id
deleteBook: function(id) {
  return axios.delete("/api/books/" + id);
}

};
