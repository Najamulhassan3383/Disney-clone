import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import home from "../images/home-icon.svg";
import search from "../images/search-icon.svg";
import watchlist from "../images/watchlist-icon.svg";
import originals from "../images/original-icon.svg";
import movies from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";
// import { auth, provider } from "../../Firebase";
import signInWithGoogle from "../../Firebase";

function Header(props) {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <a href="/home">
          <img src={home} alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src={search} alt="SEARCH" />
          <span>SEARCH</span>
        </a>

        <a href="/watchlist">
          <img src={watchlist} alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/originals">
          <img src={originals} alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>

        <a href="/movies">
          <img src={movies} alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src={series} alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <LoginButton onClick={signInWithGoogle}>Login</LoginButton>
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
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
      margin-right: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
