import React, { Component } from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import video from "../assets/peach.mp4";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo className="logo">
            <a href="#">Jenny Oh.</a>
          </Logo>
          <Nav>About Projects Contact</Nav>
        </Header>
        <Wrapper>
          <Container>
            <div className="hero-text">
              <h2>hello, i'm jenny. </h2>
              <p>
                I'm a Front End Web Developer. I have a passion for creating
                beautiful and delightful experiences.
              </p>
            </div>
          </Container>
          <Container>
            <div className="hero">
              <img src={hero} alt="Main Image" />
              <video
                controls
                autoplay
                muted
                Loop
                src="video"
                type="video/mp4"
              ></video>
            </div>
          </Container>
        </Wrapper>
      </div>
    );
  }
}
const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  width: 100%;
`;

const Logo = styled.div`
  margin-right: auto;
  margin: 10px;
  font-size: 1.5rem;
`;

const Nav = styled.div`
  margin-left: auto;
  margin-top: 25px;
  padding-right: 20px;
`;

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: row;
  border: solid 1px red;
`;

const Container = styled.div`
  display: flex;
  width: 50%;
  border: solid 1px pink;
  position: relative;

  .hero-text h2 {
    position: absolute;
    top: 40%;
    width: 100%;
    align-items: center;
    text-align: center;
    font-size: 4vw;
    color: #000;
    z-index: 2;
    letter-spacing: 2px;
    font-weight: 10;
    font-family: var(--logo-fonts);
  }

  .hero-text p {
    position: absolute;
    top: 50%;
    padding: 30px;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    color: #000;
    z-index: 2;
    letter-spacing: 2px;
    font-weight: 10;
    font-family: var(--body-fonts);
  }
`;

export default Home;
