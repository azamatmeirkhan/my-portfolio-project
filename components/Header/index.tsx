import React, { FC, useRef, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { NavBarIcon, CloseIcon } from "@/icons";
import Link from "next/link";

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
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <Icon icon={CloseIcon} size={0.5} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <Icon icon={NavBarIcon} size={0.5} />
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
`;
