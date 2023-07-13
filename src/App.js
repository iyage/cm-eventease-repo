import "./App.css";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import UserDashBoard from "./UserDashBoard";
import Events from "./Events";
import EventBooking from "./EventBooking";
const Container = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 97%;
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
          <>
            <Route path="/user-dashboard" element={<UserDashBoard />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/eventingbooking/:id/:name/:start/:end/:location/:description"
              element={<EventBooking />}
            />
          </>
        </Routes>
      </Container>
    </>
  );
}

export default App;
