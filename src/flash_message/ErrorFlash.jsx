import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: ${(props) => (props.display ? "block" : "none")};
`;
const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffecee;
  border: #ff3a51 solid 1px;
  border-radius: 7px;
  color: crimson;
  padding: 0 20px;
`;
//
//
function ErrorFlash({ children, display }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    console.log(display);
    setHide(display);
  }, [display]);

  const handleDisPlay = () => {
    setHide(false);
  };
  return (
    <Container display={hide}>
      <Wrapper>
        {children}
        <span onClick={handleDisPlay} style={{ cursor: "pointer" }}>
          x
        </span>
      </Wrapper>
    </Container>
  );
}

export default ErrorFlash;
