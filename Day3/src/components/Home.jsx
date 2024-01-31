// HomePage.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { FaGraduationCap } from 'react-icons/fa';
// import { BounceLoader } from 'react-spinners';
import Navbar from './Navbar';
import { Panel } from 'rsuite';
import { animated, useSpring } from 'react-spring';
import { Carousel } from 'rsuite';


// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  height: 100 vh;
  background-image: url('https://www.parents.com/thmb/--pZafKsgGSb8NrJVrV7lqJId9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BirthdayParty-GettyImages-1600792233-c2a961509556414f9f41b92b8471a551.jpg');
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-left: 350px;
  margin-bottom: 100px;
  font-family: 'YourFirstFont', cursive;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const AdditionalContent = styled.div`
  margin-left: 600px;
  font-family: 'YourSecondFont', sans-serif;
  opacity: 0;
  animation: ${slideInLeft} 1s forwards;
`;

const AnimatedText = styled(animated.h2)`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const AnimatedParagraph = styled(animated.p)`
  font-size: 1.2em;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const EmojiAnimation = styled(animated.span)`
  font-size: 2em;
  margin-right: 10px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const Home = () => {
  // Text animations using React Spring
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const textAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const emojiAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
<div className="event-container">
  <header>
    <Navbar/>
  </header>
  <Container>
    <Title style={titleAnimation}>
      Welcome to Birthday Management Events
      <EmojiAnimation style={emojiAnimation}></EmojiAnimation>
    </Title>

    {/* Additional Content */}
    <AdditionalContent>
      <AnimatedText style={textAnimation}>More About parties</AnimatedText>
      <AnimatedParagraph style={textAnimation}>
        A birthday event is a heartfelt celebration marking the annual milestone of one's birth. It's a joyous occasion where friends and family gather to honor and cherish the individual. Festivities often include gifts, laughter, delicious cakes, and shared meals. Whether it's a quiet family gathering or a lively party, birthdays are moments to reflect, create lasting memories, and express love and appreciation for the person being celebrated. It's a day filled with warmth, gratitude, and the spirit of togetherness
      </AnimatedParagraph>

      {/* Additional Elements */}
      {/* <AnimatedParagraph style={textAnimation}>
        Yoga is a mind and body practice that can build strength and flexibility.
      </AnimatedParagraph>
      <AnimatedParagraph style={textAnimation}>
        It may also help manage pain and reduce stress. Various styles of yoga combine physical postures, breathing techniques, and meditation.
      </AnimatedParagraph>
      <AnimatedParagraph style={textAnimation}>
        Yoga is an ancient practice that has changed over time. Modern yoga focuses on poses designed to stimulate inner peace and physical energy. Yoga can help support a balanced, active lifestyle.
      </AnimatedParagraph> */}
      {/* Add more elements as needed */}
    </AdditionalContent>
  </Container>
  <div style={{justifyContent:'space-around',display:'flex'}}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 250,padding:'10px' }}>
      <img src="src\assets\dj.jpg"/>
      <Panel header="Dj">
        <p>
          <small>
            Get ready to dance all night at the hottest DJ party in town! Feel the beat, groove to the rhythm, and let the music take control.
          </small>
        </p>
      </Panel>
    </Panel>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px' }}>
      <img src="src\assets\photo.jpeg" />
      <Panel header="photo session">
        <p>
          <small>
            Book a photo session to freeze moments in time. Our expert photographers will skillfully capture your essence, creating timeless memories with beautiful, personalized images. Cherish the moments forever.
          </small>
        </p>
      </Panel>
    </Panel>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px' }}>
      <img src="src\assets\games.jpg" />
      <Panel header="Games">
        <p>
          <small>
            Indulge in thrilling gaming experiences! From action-packed adventures to strategic challenges, our diverse collection offers endless fun. Level up your gaming excitement and immerse yourself in thrilling virtual worlds.
          </small>
        </p>
      </Panel>
    </Panel>
  </div>
  <div style={{justifyContent:'space-around',display:'flex'}}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px' }}>
      <img src="src\assets\pool.jpeg" />
      <Panel header="Pool Party">
        <p>
          <small>
            Dive into ultimate fun at our pool party! Cool off, vibe to great music, and enjoy refreshing drinks. It's the perfect splash of joy under the sun. Don't miss it!
          </small>
        </p>
      </Panel>
    </Panel>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px' }}>
      <img src="src\assets\pool.avif" />
      <Panel header="wine Tasting">
        <p>
          <small>
            Savor the exquisite art of wine tasting with us. Discover nuanced flavors, aromas, and the joy of fine wines. Join our event for a sophisticated, delightful experience that titillates your senses.
          </small>
        </p>
      </Panel>
    </Panel>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'20px' }}>
      <img src="src\assets\music.webp" />
      <Panel header="Music show">
        <p>
          <small>
            Experience the magic of live music! Our show promises an unforgettable night with talented artists, vibrant tunes, and an electrifying atmosphere. Get ready to groove and be immersed in musical bliss!
          </small>
        </p>
      </Panel>
    </Panel>
  </div>
</div>

 
  );
};

export default Home;