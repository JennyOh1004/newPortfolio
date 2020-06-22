import React, { Component } from "react";
import Home from "../src/components/Home";
import About from "../src/components/About";
// import Projects from "./Projects";
// import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <About />
        {/* <Projects />
        <Contact /> */}
      </div>
    );
  }
}

export default App;
