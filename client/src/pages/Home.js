import React from 'react';
import '../styles/home.css';
import Search from '../components/Search';
import CustomChatbot from '../components/chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';
import styled from '@emotion/styled';
import homeImage from '../images/homeImage.jpg';

const HomeContainer = styled.div``;

const MainContainer = styled.div``;

const SafetyContainer = styled.div``;
const HomeImage = styled.img`
  position: relative;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeImage src={homeImage} />
      <MainContainer></MainContainer>
      <SafetyContainer></SafetyContainer>
      <CustomChatbot />
    </HomeContainer>
  );
};

export default Home;
