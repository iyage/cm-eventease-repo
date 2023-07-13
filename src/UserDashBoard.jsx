import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 94%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: auto;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;
const Right = styled.div`
  width: auto;
  padding: 20px;
`;
const Btn = styled.button`
  border: 1px solid #116cbc;
  padding: 10px;
  color: #116cbc;
  border-radius: 7px;
  cursor: pointer;
  width: 250px;
  &:active {
    transform: scale(0.98);
  }
`;
function UserDashBoard() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <h2>User-Info</h2>
          <br />
          <hr />
          <br />
          <p>
            <span>First Name :</span>
            <span>{sessionStorage.getItem("firstName")}</span>
          </p>
          <p>
            <span>Last Name :</span>{" "}
            <span>{sessionStorage.getItem("lastName")}</span>
          </p>
          <p>
            <span>email :</span> <span>{sessionStorage.getItem("email")}</span>
          </p>
          <p>
            <span>Phone Number :</span>{" "}
            <span>{sessionStorage.getItem("phoneNumber")}</span>
          </p>
          <p>
            <span></span>
          </p>
        </Left>
        <Right>
          {JSON.parse(sessionStorage.getItem("events")).length > 0 ? (
            "events"
          ) : (
            <>
              <h2>No Event Booked!!!!</h2>
              <h6 style={{ textAlign: "center" }}>please book an event.....</h6>
            </>
          )}

          <Btn
            style={{ marginTop: "20px" }}
            onClick={() => {
              navigate("/events");
            }}>
            Book new event
          </Btn>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default UserDashBoard;
