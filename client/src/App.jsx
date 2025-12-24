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
        <Route path="/submit-game" element={<CreateGame/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
