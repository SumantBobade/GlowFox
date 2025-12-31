import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./components/AboutPage";
import CompanyPage from "./components/CompanyPage";
import Games from "./components/Games";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { Routes, Route } from "react-router-dom";
import ExploreGame from "./pages/ExploreGame";
import CreateGame from "./pages/CreateGame";
import Profile from "./pages/Profile";
import MentorProfile from "./pages/MentorProfile";
import StudentPortfolio from "./pages/StudentPortfolio";
import CreatorDashboard from "./pages/CreatorsDashboard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<ExploreGame />} />
        <Route path="/submit-game" element={<CreateGame />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mentor" element={<MentorProfile />} />
        <Route path="/portfolio" element={<StudentPortfolio />} />
        <Route
          path="/creator-dashboard"
          element={
              <CreatorDashboard />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
