import React, { Component } from "react";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
