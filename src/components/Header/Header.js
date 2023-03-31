import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

function Header(props) {
  return (
    <Nav>
      <Logo src={logo} />
      <LoginButton>Login</LoginButton>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: #090b13;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 80px;
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
