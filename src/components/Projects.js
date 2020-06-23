import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

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
              <div className="project">
                <h3 className="project-title">
                  <div className="box"></div>PROJECTS.
                </h3>
              </div>
            </section>
            <div className="project-image">Image</div>
          </Container>
          <Container>
            <div className="project-desc">Desc</div>
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
  justify-content: center;
  width: 50%;
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

  .project-title {
    position: relative;
    left: 5%;
    width: 50%;
    margin-top: 5%;
    padding: 60px;
    font-size: 3rem;
    font-family: var(--body-fonts);
    color: #000;
    letter-spacing: 2px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .project-p {
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

  .project-image {
    border: solid 1px green;
    position: absolute;
    width: 40%;
    height: 60vh;
    margin: 200px;
    top: 100px;
    left: 0px;
  }

  .project-desc {
    border: solid 1px blue;
    position: absolute;
    width: 40%;
    height: 50%;
    margin: 150px;
    top: 200px;
    right: 50px;
  }
`;

export default About;
