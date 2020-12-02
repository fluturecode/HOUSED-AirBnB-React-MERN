import React from 'react';
import Search from '../components/Search';
import CustomChatbot from '../components/chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';
import styled from '@emotion/styled';
// import homeImage from '../images/homeImage.jpg';
import Header from '../components/Header';
import Banner from '../components/Banner';

const HomeContainer = styled.div``;

const MainContainer = styled.div``;

const SafetyContainer = styled.div``;
const HomeImage = styled.img`
  position: relative;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      // Cards
      {/* // <HomeContainer>
    //   <HomeImage src={homeImage} />
    //   <MainContainer>
    //     <Search />
    //   </MainContainer>
    //   <SafetyContainer></SafetyContainer>
    //   <CustomChatbot />
    // </HomeContainer> */}
    </>
  );
};

export default Home;

// .home {
//   text-align: center;
//   position: relative;
//   background-color: rgb(87, 84, 84);
// }

// .main-square {
//   background-color: rgb(87, 84, 84);
//   border: 5px solid black;
//   width: 600px;
//   height: 550px;
//   float: right;
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   padding: 5px;
//   color: white;
// }

// .search-container {
//   position: absolute;
//   top: 55%;
//   left: 40%;
//   display: flex;
//   flex-direction: row;
//   /* transform: translate(-50%, -50%);  */
// }

// .top-img img {
//   /* width: 100%;
//   height: 600px; */
//   background-color: linen;
// }

// .simple-steps {
//   border: 1px solid black;
// }

// .all-steps {
//   border: 1px solid blue;
//   display: flex;
// }

// /* .safety-list { */
// /* } */

// .safety-steps {
//   display: inline;
//   border-bottom: 100px;
// }

// .safety-list img {
//   width: 150px;
//   height: 150px;
//   border: 5px solid lightseagreen;
//   border-radius: 25%;
//   justify-content: space-evenly;
// }

// .hostimage {
//   max-width: 100%;
//   margin-top: 75px;
//   height: auto;
//   border-radius: 30px;
// }

// .top-img {
//   position: relative;
//   text-align: center;
// }

// .header {
//   color: var(--orange-color);
//   text-decoration: underline;
//   padding-bottom: 50px;
//   margin: auto;
// }

// .pinfo {
//   font-weight: 650;
//   color: rgb(223, 215, 215);
// }

// .box-header {
//   color: rgb(241, 233, 233);
//   font-size: 80px;
//   padding-top: 100px;
//   padding-bottom: 50px;
// }

// .box-text {
//   color: rgb(241, 233, 233);
//   font-size: 40px;
// }
