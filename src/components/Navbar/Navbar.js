// Navbar.js
import React from "react";
import styled from "styled-components";

const Navouter = styled.div`
  background-color: #0f141c;
  border-bottom: 1px solid #ffffff38;
  width: 100%;
  border-radius: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
`;
const Nav = styled.nav`
  width: 100%;
  background-color: #0f141c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0px;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 0;
    li {
      a {
        color: #fff;
        text-align: center;
        font-family: "DM Sans", sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        text-decoration: none;
      }
    }
  }
  ul li {
    list-style: none;
  }
`;
const NavContainer = styled.div`
  //  @media (min-width: 1650px) {
  //  width: 100%;
  // max-width: 1290px !important;
  //   }
  margin: 0px 106px;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Navouter>
      <NavContainer>
        <Nav>
          <div className="logo">
            <img src="assets/logo.svg"
              alt="img" />
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Testimonial</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Nav>
      </NavContainer>
    </Navouter>
  );
};

export default Navbar;
