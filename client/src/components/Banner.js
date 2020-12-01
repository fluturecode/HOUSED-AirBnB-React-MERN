import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import Search from './Search.js';
import { useHistory } from 'react-router-dom';
import homeImage from './homeImage.jpg';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  const BannerContainer = styled.div`
    background-image: url('${homeImage}');
    background-position: center center;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;

  const BannerSearch = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BannerInfo = styled.div`
    background-color: rgb(66, 70, 70);
    color: white;
    padding-top: 14vh;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    width: 280px;
    border-radius: 10px;
  `;

  return (
    <>
      <BannerContainer>
        <BannerSearch>
          {showSearch && <Search />}
          <Button
            onClick={() => setShowSearch(!showSearch)}
            className="banner__searchButton"
            variant="outlined"
          >
            {showSearch ? 'Hide' : 'Search Dates'}
          </Button>
        </BannerSearch>
        <BannerInfo>
          <h1>Discover your next home away from home...</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near you
          </h5>
          <Button onClick={() => history.push('/search')} variant="outlined">
            Explore Nearby
          </Button>
        </BannerInfo>
      </BannerContainer>
    </>
  );
}

export default Banner;
