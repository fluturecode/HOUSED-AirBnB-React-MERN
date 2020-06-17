import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function CustomChatbot(props) {
  // Make the chatbot resizeable or collapsible
  const config = {
    width: '350px',
    height: '450px',
    floating: true
  };

  const steps = [
    {
      // Identifies the current step
      id: 'Greet',
      // Displays the message in window, once the step is called
      message: "Hello, welcome to Housed! I'm Liz, what is your name?",
      // The id of the next step
      trigger: 'Waiting user input for name'
    },
    {
      id: 'Waiting user input for name',
      user: true,
      trigger: 'Nice to Meet You'
    },
    {
      id: 'Nice to Meet You',
      message: "Hi {previousValue}, it's nice to meet you!",
      trigger: 'First Time'
    },
    {
      id: 'First Time',
      message: 'Is this your first time visitng Housed?',
      trigger: 'User visit response'
    },
    {
      id: 'User visit response',
      user: true,
      trigger: 'Tell about Housed'
    },
    {
      id: 'Tell about Housed',
      message:
        'Amazing! Well we are certainly glad you found us, and since you are here let me point out some things to help guide you through our site. Is that ok with you?',
      trigger: 'Learn about Housed'
    },
    {
      id: 'Learn about Housed',
      user: true,
      trigger: 'About Housed'
    },
    {
      id: 'About Housed',
      message:
        'You can search available listings by clicking on the search button to the left. Simple right?',
      trigger: 'Search button'
    },
    {
      id: 'Search button',
      user: true,
      trigger: 'Safety'
    },
    {
      id: 'Safety',
      message:
        'At Housed we take the safety of all of our guests very seriously, that is why we verify and conduct background checks on all our hosts. Is safety important for you?',
      trigger: 'User safety response'
    },
    {
      id: 'User safety response',
      user: true,
      trigger: 'Good news'
    },
    {
      id: 'Good news',
      message: "Well it's nice to know we're on the same page.",
      trigger: 'Sign up'
    },
    {
      id: 'Sign up',
      message:
        'Would you be interested in signing up to become part of our family?',
      trigger: 'part of the family'
    },
    {
      id: 'part of the family',
      user: true,
      trigger: 'done'
    },
    {
      id: 'done',
      message:
        'Wonderful! Well it was nice chatting with you. Just follow the sign up button above, and we will be in touch shortly. Thanks again for visiting Housed!',
      end: true
    }
  ];

  const theme = {
    background: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: 'orange',
    headerFontColor: 'white',
    headerFontSize: '25px',
    botBubbleColor: 'grey',
    botFontColor: 'white',
    botFontSize: '20px',
    userBubblecolor: 'white',
    userFontColor: 'black',
    userFontSize: '25px'
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
