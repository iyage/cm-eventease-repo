import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import SuccessFlash from "./flash_message/SuccessFlash";
import ErrorFlash from "./flash_message/ErrorFlash";
const Container = styled.div`
  width: 78%;
  margin: auto;
  margin-top: 170px;
`;
const Form = styled.form`
  width: 450px;
  height: 350px;
  margin: auto;
  background: white;
  padding: 20px 20px;
`;

const ControlContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 10px;
`;
const Control = styled.span`
  width: 25px;
  height: 25px;
  border: 1px solid #116cbc;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  border: 1px solid #116cbc;
  padding: 10px;
  color: #116cbc;
  border-radius: 7px;
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  &:active {
    transform: scale(0.98);
  }
`;
const FormInputControl = styled.div`
  margin: 20px 0;
  color: #878c91;
`;
const Label = styled.label`
  margin-right: 20px;
`;
const CtrlBtn = styled.span`
  cursor: pointer;
  font-size: 25px;
`;

function EventBooking() {
  const [numOfTickects, setNumOfTickects] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const handleChange = (data) => {
    data === "add"
      ? setNumOfTickects((prev) => prev + 1)
      : setNumOfTickects((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionStorage.getItem("userId"),
      eventId: params.id,
      numberOfTickets: numOfTickects,
      bookingDate: new Date(),
    };
    mutate(payload);
  };
  const bookEvent = async (data) => {
    return await axios.post(
      "http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/bookevent",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const { mutate, isSuccess, isError } = useMutation(
    (variables) => bookEvent(variables),
    {
      onSuccess(data, variables, context) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    }
  );
  return (
    <Container>
      {
        <SuccessFlash display={isSuccess}>
          Event Successfully booked
        </SuccessFlash>
      }
      {<ErrorFlash display={isError}>Please Try Again</ErrorFlash>}
      <Header>Welcome To Event Booking Page</Header>
      <Form>
        <ul>
          <li>Event Name :{params.name}</li>
          <li>Event Description :{params.description}</li>
          <li>
            Event Duration {params.start} -- to -- {params.end}{" "}
          </li>
          <li>Event location : {params.location}</li>
        </ul>
        <FormInputControl>
          <ControlContainer>
            <Label>Number Of Tickets</Label>
            <CtrlBtn onClick={() => handleChange("minus")}>-</CtrlBtn>
            <Control>{numOfTickects}</Control>
            <CtrlBtn onClick={() => handleChange("add")}>+</CtrlBtn>
          </ControlContainer>
        </FormInputControl>

        <Btn onClick={(e) => handleSubmit(e)}>Submit</Btn>
      </Form>
    </Container>
  );
}

export default EventBooking;
