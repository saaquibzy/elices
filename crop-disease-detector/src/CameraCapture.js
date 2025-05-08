import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: "environment", // Use back camera on mobile
};

function CameraCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    onCapture(imageSrc); // Pass image to parent component
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const uploadedImage = e.target.result;
      setCapturedImage(uploadedImage);
      onCapture(uploadedImage); // Pass uploaded image
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>📸 Capture or Upload Crop Image</h2>

      {/* Camera Preview */}
      <div style={{ marginBottom: "10px" }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          width={320}
          height={240}
        />
        <br />
        <button onClick={capture} style={{ marginTop: "10px" }}>
          Take Photo
        </button>
      </div>

      {/* OR Upload Image */}
      <div>
        <p>📁 Or upload an image:</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Show Captured Image */}
      {capturedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>🖼️ Preview:</h3>
          <img src={capturedImage} alt="Captured" width="320" />
        </div>
      )}
    </div>
  );
}

export default CameraCapture;
