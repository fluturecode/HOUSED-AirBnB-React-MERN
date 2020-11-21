import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';

const HomeContainer = styled.div`
`

const MainContainer = styled.div`
`

const BoxContainer = styled.div`
`

const homeImage = require('../images/simon-rae-kB_KKcp8uTw-unsplash.jpg');
const divStyle = {
  backgroundImage: `url(${homeImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '2100px',
  height: '1000px'
};

const Home = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <BoxContainer>
          <BoxText1>Looking for a place to stay?</BoxText1>
          <BoxText2>
            We'll find your next home, just choose what works best for you!
          </BoxText2>
        </BoxContainer>
      </MainContainer>
      <SafetyContainer>
        <SafetyText1>We Take Safety Seriously!</SafetyText1>
        <SafetyText2>Background Checks</SafetyText2>
        <SafetyText3>We believe your safety is everything</SafetyText3>
        <SafetyText4>
          {' '}
          We run checks to make sure each person is verified and approved.
        </SafetyText4>
      </SafetyContainer>
      <div className="safety-neighborhood">
        <img src={neighborhood} alt="neighborhood checks" />
        <h2 className="header"> Neighborhood Checks</h2>
        <p className="pinfo">
          We give you a report of the area you will be staying
        </p>
        <p className="pinfo">
          before you confirm to make sure you know where you are going.{' '}
        </p>
      </div>
      <div className="safety-badges">
        <img src={membericon} alt="Member icons" />
        <h2 className="header"> Achievement Badges</h2>
        <p className="pinfo">
          We designate icons to hosts and guests as they reach milestones!
        </p>
      </div>
      <CustomChatbot />
    </HomeContainer>
  );
};

export default Home;
