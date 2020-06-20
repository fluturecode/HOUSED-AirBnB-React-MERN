import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="top-img">
        <img src={require('../images/cozy_room.jpg')} alt="Cozy bedroom" />
      </div>

      <div className="search-container">
        <Search />
      </div>

      <div className="safety-list">
        <h2> We Take Safety Seriously!</h2>
        <div className="safety-steps">
          <img src={bgcheck} alt="background check" />
          <h2 className="header"> Background Checks</h2>
          <p className="pinfo">We believe your safety is everything.</p>
          <p className="pinfo">
            We run checks to make sure each person is verified and approved.
          </p>
        </div>

        <div className="safety-steps">
          <img src={neighborhood} alt="neighborhood checks" />
          <h2 className="header"> Neighborhood Checks</h2>
          <p className="pinfo">
            We give you a report of the area you will be staying
          </p>
          <p className="pinfo">
            before you confirm to make sure you know where you are going.{' '}
          </p>
        </div>

        <div className="safety-steps">
          <img src={membericon} alt="Member icons" />
          <h2 className="header"> Achievement Badges</h2>
          <p className="pinfo">
            We designate icons to hosts and guests as they reach milestones!
          </p>
        </div>
      </div>
      <div className="become-host">
        <h2> Become a Host!</h2>
        <CustomChatbot />
      </div>
    </div>
  );
};

export default Home;
