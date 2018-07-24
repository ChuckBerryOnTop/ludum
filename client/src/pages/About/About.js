import React from "react";
import "./About.css";

const About = () => (
  <div className="mainArea">
     <div className="wrapper">
    

    <div className="post-it-note yellow" id="note-1">
      <div className="pin blue"></div>

      <h2>
      About Us</h2>
      <hr></hr>
      <p>Two cool bros, trying to make a cool game we can eventually monetize...</p>
    </div>

    <div className="post-it-note red" id="note-2">
      <div className="pin yellow"></div>

      <h2>
      Hey, I'm Jeff!</h2>
      <hr></hr>
      <p>One-Half of team Ludum, they call me the bad boy of the group, I'm basically the Nick Carter of the group.</p>
    </div>

    <div className="post-it-note blue" id="note-3">
      <div className="pin red"></div>

      <h2>Dan Kubiak</h2>
      <hr></hr>
      <p>The Other-Half of team Ludum, considered to be the Tiger Woods of coding.</p>
    </div>

    <figure className="polaroid" id="picture-1">
      <div className="pin red"></div><img alt="Team LUDUM"  src={require("../../images/danjeff.jpg")}></img>

      <figcaption>
        --&gt; Sexy team #Ludum at their finest
      </figcaption>
    </figure>

    <figure className="polaroid" id="picture-2">
      <div className="pin blue"></div><img alt="Team LUDUM" src="https://s-i.huffpost.com/gen/1832778/images/o-TWO-GUYS-ONE-PUP-VIDEO-facebook.jpg"></img>
      <figcaption>
        <a href="https://github.com/ChuckBerryOnTop/ludum">Git Hub Repo, check us out!<i className="fab fa-github-alt"></i><i className="fab fa-github-alt"></i><i className="fab fa-github-alt"></i></a>
      </figcaption>
    </figure>
  </div>
  </div>
);

export default About;