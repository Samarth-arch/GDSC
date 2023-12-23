import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Teams from "./Pages/Teams";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Event from "./Pages/Event";
import Error404 from "./Pages/Error404";


function RootComponent() {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key={App} element={<App />} />
        <Route path="/teams"  key={Teams} element={<Teams />} />
        <Route path="/gallery" key={Gallery} element={<Gallery />} />
        <Route path="/contact" key={Contact} element={<Contact />} />
        <Route path="/event" key={Event} element={<Event />} />
        <Route path="*" key={Error404} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
reportWebVitals();
