import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            height="53"
            width="190"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-auto">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="./cart" className="ml-auto">
          <ButtonContainer>
            <span>
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 1.5rem;
  padding: 0.2rem 0.5rem 0.3rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: var(--mainWhite);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
const ButtonContain = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  letter-spacing: 0.1rem;
  border: 0.05rem solid var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem 0.3rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: var(--mainWhite);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    text-transform: capitalize;
  }
`;
