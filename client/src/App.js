import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import About from "./pages/About";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

const App = () => (
  <div>
  <Router>
    <div>
      <Nav />
        <Route exact path="/" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/game" component={Login} />
        <Route exact path="/leaderboard" component={Books} />
      <Footer />
    </div>
  </Router>
  </div>
);

export default App;
