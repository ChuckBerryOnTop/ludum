import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import "./Leaderboard.css";


class Leaderboard extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // componentDidMount() {
    
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div className="main">
      <div className="container">
      <div className="screen">
  <div className="title">
    <div className="row">
    <h1 className="leadTxt">LUDUM Leaderboard</h1>
    </div>
    
  </div>
  <div>
    <table>
      <tr>
        <th>RANK</th>
        <th>SCORE</th>
        <th>NAME</th>
      </tr>
      <tr>
        <td>1st</td>
        <td>465800</td>
        <td>Jeff</td>
      </tr>
      <tr>
        <td>2nd</td>
        <td>178500</td>
        <td>DANIEL</td>
      </tr>
      <tr>
        <td>3rd</td>
        <td>172500</td>
        <td>JEFF</td>
      </tr>
      <tr>
        <td>4th</td>
        <td>088600</td>
        <td>DKUB</td>
      </tr>
      <tr>
        <td>5th</td>
        <td>063800</td>
        <td>JEF</td>
      </tr>
      <tr>
        <td>6th</td>
        <td>063700</td>
        <td>DAK</td>
      </tr>
      <tr>
        <td>7th</td>
        <td>063800</td>
        <td>JEF</td>
      </tr>
      
    </table>
  </div>
</div>
</div>
</div>
    );
  }
}

export default Leaderboard;
