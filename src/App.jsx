import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/footer.jsx";
import MultimediaGallery from "./components/gallery/MultimediaGallery.jsx";
import Header from "./components/header/Header.jsx";
import CallToAction from "./components/petitionSection/CallToAction.jsx";
import HomePage from "./pages/HomePage.jsx";
{// Page Components
//import Petition from "./pages/Petition";
}

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/gallery" element={<MultimediaGallery/>}/>
        <Route path="/letter-campaign" element={<CallToAction/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
