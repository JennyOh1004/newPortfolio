import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import profile from "../assets/jenny_profile.png";

class About extends Component {
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
            <section>
              <div className="about">
                <h3 className="about-title">
                  <div className="box"></div>About.
                </h3>
                <p className="about-p">
                  I’m originally from South Korea and earned my bachelors degree
                  in Tourism. After moving to the US, I fell in love with coding
                  and then I took a boot camp at UC Berkeley.
                </p>

                <p className="about-p">
                  I believe that I’m enthusiastic and trendy. Also, I’m eager to
                  learn new things such as new cultures. I started learning how
                  to code because I’d like to build aesthetically pleasing
                  things such as web sites and web applications.
                </p>

                <p className="about-p">
                  I am focused on writing clean, meaningful and efficient code.
                  I also enjoy to create intuitive and minimal designs.
                </p>
              </div>

              <div className="icons">
                <a href="https://www.linkedin.com/in/seulkioh1004/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://github.com/JennyOh1004">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="mailto:ohseulki1004@gmail.com">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </div>
            </section>
          </Container>
          <Container>
            <img src={profile} className="profilePic" alt="Profile Image" />
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
  flex-grow: 1;
  border: solid 1px pink;

  .box {
    width: 10px;
    height: 50px;
    background: #fcb69f;
    position: absolute;
    margin-top: 8px;
    margin-left: -20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .profilePic {
    width: 50%;
    height: 45%;
    margin: auto;
    align-items: center;
    border-radius: 5px;
  }

  .about-title {
    position: relative;
    left: 5%;
    width: 50%;
    margin-top: 5%;
    padding: 60px;
    font-size: 3rem;
    font-family: var(--body-fonts);
    color: #000;
    letter-spacing: 1px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .about-p {
    position: relative;
    left: 5%;
    width: 90%;
    margin: 10px;
    padding: 20px;
    letter-spacing: 1.5px;
    color: #000;
    font-family: var(--body-fonts);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .icons {
    position: absolute;
    margin: 30px;
    top: 80%;
    right: 10%;
    z-index: 3;
  }

  .icon__link a {
    z-index: 2;
    color: #000;
  }

  ion-icon {
    font-size: 1.5vw;
    padding: 2vw;
    color: #000;
  }

  ion-icon:hover {
    color: #000;
    transition: linear all 0.2s;
  }
`;

export default About;
