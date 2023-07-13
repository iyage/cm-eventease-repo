import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import img1 from "./images/hand-g4c8b781e5_1280.jpg";
import img2 from "./images/beach-gb9717f01d_1280.jpg";
import img3 from "./images/live-music-gb4bb9728b_1280.jpg";
import img4 from "./images/africa-g941946781_1280.jpg";
import img5 from "./images/carousel-g437f896b2_1280.jpg";
import { useNavigate } from "react-router-dom";

const pics = [img1, img2, img3, img4, img5];

const Card = styled.div`
  color: white;
  text-shadow: 3px 3px 5px black;
  width: 300px;
  height: 270px;
  box-shadow: 0px 0px 3px 0px hsla(0, 0%, 0%, 0.3);
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  position: relative;
  border-radius: 10px;
`;
const Container = styled.div`
  width: 92%;
  margin: auto;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Btn = styled.button`
  border: 1px solid #116cbc;
  padding: 10px;
  color: #116cbc;
  border-radius: 7px;
  position: absolute;
  cursor: pointer;
  width: 220px;
  &:active {
    transform: scale(0.98);
  }
  bottom: 20px;
  left: 40px;
`;
function Events() {
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess } = useQuery("evets", () => {
    return axios.get(
      "http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/fetchallevents"
    );
  });
  return (
    <Container>
      {isSuccess && (
        <Wrapper>
          {data.data.data.data.map((event) => {
            return (
              <Card img={pics[Math.floor(Math.random() * 5)]}>
                <ul>
                  <li>{event.eventName}</li>
                  <li>{event.description}</li>
                  <li>{event.startDate}</li>
                  <li>{event.endDate}</li>
                  <li>{event.location}</li>
                </ul>
                <Btn
                  onClick={() =>
                    navigate(
                      `/eventingbooking/${event.id}/${event.eventName}/${event.startDate}/${event.endDate}/${event.location}/${event.description}`
                    )
                  }>
                  Book This Event
                </Btn>
              </Card>
            );
          })}
        </Wrapper>
      )}
    </Container>
  );
}

export default Events;
