"use client";

import { useState } from "react";

export const Photo = () => {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);

  // Function to handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
        setError(false); // Clear error when a photo is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle the "Continue" button
  const handleContinue = () => {
    if (!photo) {
      setError(true); // Set error if no photo is uploaded
    } else {
      setError(false);
      // Proceed with form submission or other actions
      console.log("Photo uploaded successfully:", photo);
    }
  };

  return (
    <div className="w-full mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Upload a photo (you can change it later):
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={`h-[180px] bg-[#f8f8f8] w-full rounded-[8px] p-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } cursor-pointer`}
      />
      {photo && (
        <div className="mt-4">
          <img
            src={photo}
            alt="Uploaded Preview"
            className="w-full max-h-[200px] object-cover rounded-lg border mb-4"
          />
          <p className="text-gray-500 text-sm">To replace this photo, upload a new one above.</p>
        </div>
      )}
      {error && (
        <p className="text-red-500 text-sm mt-2">No photo uploaded. Please upload a photo.</p>
      )}

      <button
        className="bg-blue-500 text-white font-semibold p-3 rounded-lg w-full hover:bg-blue-600 mt-4"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};
