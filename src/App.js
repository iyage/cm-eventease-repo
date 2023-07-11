import "./App.css";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import UserDashBoard from "./UserDashBoard";
const Container = styled.div`
  margin-top: 50px;
`;
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-dashboard" element={<UserDashBoard />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
