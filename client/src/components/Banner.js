import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import DateSearch from './DateSearch.js';
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

  const BannerInfo = styled.div`
      background-color: grey;
      color: white;
      padding-top: 10vh;
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 10vh;
      width: 300px;
      border-radius: 10px;
    `,
    button = styled.button`
      background-color: #ff7779;
      color: white;
      text-transform: inherit;
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: 600;
      &:hover {
        background-color: white;
        color: #ff7779;
      }
    `,
    h5 = styled.div`
      margin-top: 10px;
    `;

  const BannerSearch = styled.div`
      display: flex;
      flex-direction: column;
    `,
    ExploreButton = styled.button`
      font-weight: 900 !important;
      text-transform: inherit !important;
    `;

  return (
    <>
      <BannerContainer>
        <BannerSearch>
          {showSearch && <DateSearch />}
          <Button onClick={() => setShowSearch(!showSearch)} variant="outlined">
            {showSearch ? 'Hide' : 'Search Dates'}
          </Button>
        </BannerSearch>
        <BannerInfo>
          <h1>Discover your next home away from home...</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near you
          </h5>
          <ExploreButton
            onClick={() => history.push('/search')}
            variant="outlined"
          >
            Explore Nearby
          </ExploreButton>
        </BannerInfo>
      </BannerContainer>
    </>
  );
}

export default Banner;
