import React,{Component} from "react";
import {Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";
import {Redirect} from 'react-router-dom';

class loginScreen extends Component  {
  state ={
    login: "",
    password: ""
  }
  //handles all the text typed on page
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handles the login creation
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.login && this.state.password) {
      API.saveLogin({
        username: this.state.login,
        password: this.state.password,
      })
      // .then(res => this.loadBooks())
      .catch(err => console.log(err));
    }
    // change this either to modal or alert to let ppl know that they entered account correctly
    window.location.reload();
  };
  
  //handles the login attempt
  handleLogin = event => {
    event.preventDefault();
    //makes sure that a login and password input is present if not can't go through
    if (this.state.login && this.state.password) {
      API.getLogin({
        username: this.state.login,
        password: this.state.password
      })
      .then(res => {
        //checks if login and password is correct
        if (res.data === "Incorrect Password" || res.data === "Too many attempts"){
          if(!alert('Incorrect Login or Password, try again!')){window.location.reload();}
        } else {
          console.log(res)
          localStorage.setItem("user-loggedIn", true);
          //remember to json.parse the res when getting the storage item!!!!!
          localStorage.setItem("local", JSON.stringify(res));
          window.location.reload();
          
        } 
      } 
      )
    }
  }
  render() {
    if (localStorage.getItem("user-loggedIn")) {
      return <Redirect to='/game' />
    }
    
    return (
      <Container fluid>
    <Row>
      <Col md={12}>
        <Jumbotron>
        <h1 style={{textAlign: "center"}}>LUDUM Game Login</h1>
          <Form>
        <FormGroup row>
          <Label for="userName" sm={2}>Username</Label>
          <Col sm={10}>
            <Input 
            type="text" 
            name="login" 
            id="userName" 
            placeholder="Enter Username..." 
            value={this.state.login}  
            onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="passWord" sm={2}>Password</Label>
          <Col sm={10}>
            <Input 
            type="password" 
            name="password" 
            id="passWord" 
            placeholder="Enter Password..." 
            value={this.state.password} 
            onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>
        <FormBtn
          disabled={!(this.state.login && this.state.password)}
          onClick={this.handleLogin}
        >
          Login
          </FormBtn>
          <FormBtn
          disabled={!(this.state.login && this.state.password)}
          onClick={this.handleFormSubmit}
          >
            Create
            </FormBtn>
          </Form>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
    )
  }
}

export default loginScreen;
  

