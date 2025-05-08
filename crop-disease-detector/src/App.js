import React, { useState } from "react";
import CameraCapture from "./CameraCapture";

function App() {
  const [image, setImage] = useState(null);

  const handleImageCapture = (imageData) => {
    console.log("Image captured/uploaded:", imageData);
    // Later, we'll send this image to AI model
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌾 Crop Disease Detector</h1>
      <p>Take a photo or upload an image of a diseased crop.</p>

      <CameraCapture onCapture={handleImageCapture} />

      {/* Future features will go here */}
    </div>
  );
}

export default App;
