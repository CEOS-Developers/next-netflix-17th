import styled from 'styled-components';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <HeaderWrapper>
      <div className={`nav ${show && 'nav_black'}`}>
        <Link href={'/'} className="Logo">
          <LogoWrapper src={`/netflix_trans.png`}></LogoWrapper>
        </Link>
        <Link href={'/header_tvShow'} className="Logo">
          <HeaderMenu>TV Shows</HeaderMenu>
        </Link>
        <Link href={'/header_movie'} className="Logo">
          <HeaderMenu>Movies</HeaderMenu>
        </Link>
        <Link href={'/home'} className="Logo">
          <HeaderMenu>My List</HeaderMenu>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  .nav {
    width: 375px;
    padding: 1rem 0 1rem 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    transition: all 0.5s ease-in;
  }
  .nav_black {
    background-color: black;
  }
  .Logo {
    text-decoration: none;
    :hover {
      transform: scale(0.92);
      transition: transform 0.35s;
    }
  }
`;
const LogoLink = styled(Link)``;
const HeaderMenu = styled.p`
  font-size: 17.2px;
  color: white;
`;

const LogoWrapper = styled.img`
  width: 1.5rem;
`;
