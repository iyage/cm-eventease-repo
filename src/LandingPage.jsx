import React from "react";
import styled from "styled-components";
import landpageImage from "./images/homepage-jumbotron.jpg";
const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`;
const WelcomeMessage = styled.h1`
  position: absolute;
  top: 100px;
  left: 15%;
  font-size: 50px;
  text-align: center;
  max-width: 600px;
`;
function LandingPage() {
  return (
    <Container>
      <WelcomeMessage>
        You Are Welcome To EventEase Ticket Booking
      </WelcomeMessage>
      <img src={landpageImage} alt="" srcset="" />
    </Container>
  );
}

export default LandingPage;
