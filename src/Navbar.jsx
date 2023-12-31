import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: skyblue;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: 0 30px;
`;
const Logo = styled.h2`
  color: white;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  gap: 20px;
`;
const Btn = styled.span`
  border: 1px solid #116cbc;
  padding: 10px;
  color: #116cbc;
  border-radius: 7px;
  cursor: pointer;
  margin: 0 10px;
`;

function Navbar() {
  const navigate = useNavigate();
  const handleLOgout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo onClick={() => navigate("/")}>EVENTEASE</Logo>
          <Right>
            {sessionStorage.getItem("login") ? (
              <div>
                {" "}
                <Btn onClick={handleLOgout}>LogOut</Btn>
                <Btn onClick={() => navigate("/user-dashboard")}>Dashboard</Btn>
              </div>
            ) : (
              <div>
                {" "}
                <Btn onClick={() => navigate("/login")}>Login</Btn>
                <Btn onClick={() => navigate("/signup")}>SignUp</Btn>
              </div>
            )}
          </Right>
        </Wrapper>
      </Container>
      ;
    </>
  );
}

export default Navbar;
