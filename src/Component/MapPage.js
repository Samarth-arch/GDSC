import React from 'react';
import { Component, useState, useRef, useEffect } from "react";


const MapPage = (props) => {
  const [hid, setHid] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHid(true);
    }, 600);
    // Call the setProgress function with the value 50 to update the progress
    props.setProgress(100);
  }, [props]);
  // Replace with the actual Google Maps URL
  const googleMapsURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14710.064506540346!2d75.92470045541991!3d22.820386700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf455b4cec3%3A0x426141aa8141f7a5!2sAcropolis%20Institute%20Of%20Technology%20And%20Research%20-%20AITR!5e0!3m2!1sen!2sin!4v1698764893225!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <div>
        
      <h1 className="text-6xl font-bold " style={{marginBottom:"0px", fontSize:"60px"}}>Google Map</h1>
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full">
        <iframe
          src={googleMapsURL}
          width="100%" // Set the width to 100% to cover the screen
          height="450" // Set the height as needed
          frameBorder="0"
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>
    </div>
    </div>

  );
}

export default MapPage;
