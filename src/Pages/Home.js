import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import Landing from "../Component/Landing";
import Whatwedo from "../Component/WhatWeDo";
import Navbar from "../Component/NavBar";
import Partner from "../Component/Partners";
import Footer from "../Component/Footer.js";
import AboutUs from "../Component/AboutUs.js";
import FAQ from "../Component/FAQ.js";
import MapPage from "../Component/MapPage";

export default function Home() {
  const [progress, setProgress] = useState(0);

  // Custom function to set the progress state
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <div className="content-container">
        <Landing setProgress={updateProgress} />
        <AboutUs setProgress={updateProgress}/>
        <Whatwedo setProgress={updateProgress}/>
        <Partner setProgress={updateProgress}/>
        <FAQ setProgress={updateProgress}/>
        <MapPage setProgress={updateProgress}/>
        <Footer setProgress={updateProgress}/>
      </div>
    </div>
  );
}
