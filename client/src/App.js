import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import About from "./pages/About";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

const App = () => (
  <div>
  <Router>
    <div>
      <Nav />
      
        <Route exact path="/" component={About} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/about" component={About} />
        
      <Footer />
    </div>
  </Router>
  </div>
);

export default App;
