import React from 'react';
import styled from '@emotion/styled';
import housedLogo from './housedLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    width: 100%;
  `;
  const LogoImage = styled.img`
    object-fit: contain;
    height: 100px;
    margin-left: 20px;
  `;
  const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: 400px;
    padding: 10px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 999px;
  `;
  const Input = styled.input`
    border: none;
    padding: 10px;
    outline-width: 0;
  `;
  const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    margin-right: 80px;
  `;

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={housedLogo} />
      </Link>

      <HeaderCenter>
        <Input type="text" />
        <SearchIcon />
      </HeaderCenter>
      <HeaderRight>
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
