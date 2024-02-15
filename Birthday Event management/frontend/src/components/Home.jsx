import styled, { keyframes } from 'styled-components';
import Navbar from './CustomNavBar';
// import { Panel } from 'rsuite';
import { animated, useSpring } from 'react-spring';
import CustomPanel from './CustomPanel';
import Footer from './Footer';

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
  min-height: 100vh;
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
          <AnimatedText style={textAnimation}>More About parties:
Birthday event parties are joyous occasions filled with celebration, cake, balloons, and presents. Surrounded by friends and family, laughter echoes through the air amidst colorful decorations and lively music. Dancing, games, and surprises create cherished memories, captured in photos amid the glow of candles atop the cake. Wishes are shared, cheers resound, and themed festivities unfold with invitations extended to all. :</AnimatedText>
        </AdditionalContent>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap' }}>
        <PanelContainer>
          <CustomPanel imageUrl="src\assets\dj.jpg" header="DJ" description="Get ready to dance all night at the hottest DJ party in town! Feel the beat, groove to the rhythm, and let the music take control." />
          <CustomPanel imageUrl="src\assets\photo.jpeg" header="Photo Session" description="Book a photo session to freeze moments in time. Our expert photographers will skillfully capture your essence, creating timeless memories with beautiful, personalized images. Cherish the moments forever." />
          <CustomPanel imageUrl="src\assets\game2.jpeg" header="Games" description="Indulge in thrilling gaming experiences! From action-packed adventures to strategic challenges, our diverse collection offers endless fun. Level up your gaming excitement and immerse yourself in thrilling virtual worlds." />
        </PanelContainer>
        <PanelContainer>
          <CustomPanel imageUrl="src\assets\pool.jpeg" header="Pool Party" description="Enjoy a refreshing pool party with friends and family! Dive into fun, splash around, and soak up the sun in our cool, inviting pool. Make a splash and create unforgettable memories at our pool party!" />
          <CustomPanel imageUrl="src\assets\wine 2.jpeg" header="Wine Tasting" description="Savor the exquisite art of wine tasting with us. Discover nuanced flavors, aromas, and the joy of fine wines. Join our event for a sophisticated, delightful experience that titillates your senses." />
          <CustomPanel imageUrl="src\assets\music.webp" header="Music Show" description="Experience the magic of live music! Our show promises an unforgettable night with talented artists, vibrant tunes, and an electrifying atmosphere. Get ready to groove and be immersed in musical bliss!" />
        </PanelContainer>
        <PanelContainer>
          <CustomPanel imageUrl="src\assets\magic.jpg" header="Magic Show" description="A mesmerizing magic show filled with illusions, sleight of hand, and wonder. Audience gasps as the magician defies reality, captivating them with spellbinding feats and mystery" />
          <CustomPanel imageUrl="src\assets\tatoo.jpeg" header="Tatoos" description="Tattoos, intricate art etched into skin, express individuality and stories. Inked with personal significance, they adorn bodies, symbolizing memories, beliefs, passions, and identity, each design a unique masterpiece." />
          <CustomPanel imageUrl="src\assets\mime.jpg" header="Mime Show" description="Mime shows are silent performances using gestures and expressions to convey stories, emotions, and concepts, captivating audiences with universal communication." />
        </PanelContainer>
      </div>
      <Footer/>
    </div>
  );
};

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export default Home;