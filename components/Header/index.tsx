import React, { FC, useRef, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import LinkedinIcon from "@/public/assets/img/linkedin.svg";
import FacebookIcon from "@/public/assets/img/facebook.svg";
import InstagramIcon from "@/public/assets/img/instagram.svg";

export const Header: FC = () => {
  const navRef = useRef<any>();

  const showNavbar = useCallback(() => {
    navRef.current.classList.toggle("responsive_nav");
  }, []);

  return (
    <StyledContainer>
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#my-works">My works</Link>
          <Link href="#contacts">Contacts</Link>
          <div className="social-icon">
            <Link href="#">
              <LinkedinIcon />
            </Link>
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <InstagramIcon />
            </Link>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            Exit
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          Open
        </button>
      </header>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: #29335c;
    color: #eee;
  }

  nav a {
    margin: 0 2rem;
    color: #eee;
    text-decoration: none;
  }

  nav a:hover {
    color: #db2b39;
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    visibility: hidden;
    color: #eee;
    opacity: 0;

    outline: none;
  }

  @media only screen and (max-width: 1024px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    header nav {
      position: fixed;
      top: -100vh;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: #29335c;
      transition: 1s;
    }

    header .responsive_nav {
      transform: translateY(100vh);
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    nav a {
      font-size: 1.5rem;
    }
  }

  .social-icon {
    display: inline-block;
  }

  .social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }

  .social-icon a:hover::before {
    transform: scale(1);
  }

  .social-icon a svg {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
  }

  .social-icon a:hover svg {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
      hue-rotate(346deg) brightness(95%) contrast(86%);
  }
`;
