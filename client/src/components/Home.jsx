import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';
import becomehost from '../images/becomehost.png';

const Home = () => {
  return (
    <div className="home">
      <div className="top-img">
        <div className="main-square">
          <div className="box-header">Looking for a place to stay?</div>
          <div className="box-text">
            We'll find your next home, just choose what works best for you!
          </div>
        </div>
        <div className="search-container">
          <Search />
        </div>
        <img src={require('../images/blueroom.jpg')} alt="Cozy bedroom" />
      </div>
      <div className="safety-list">
        <h1 className="header"> We Take Safety Seriously!</h1>
        <div className="safety-background">
          <img src={bgcheck} alt="background check" />
          <h2 className="header"> Background Checks</h2>
          <p className="pinfo">We believe your safety is everything.</p>
          <p className="pinfo">
            We run checks to make sure each person is verified and approved.
          </p>
        </div>

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
      </div>
      <div className="become-host">
        <img className="hostimage" src={becomehost} alt="become host link" />
        <CustomChatbot />
      </div>
    </div>
  );
};

export default Home;
