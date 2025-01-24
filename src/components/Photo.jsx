"use client";

import { useState } from "react";

export const Photo = ({ setPage }) => {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
        setError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (!photo) setError(true);
    else setPage(4);
  };

  return (
    <div className="w-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={`h-44 bg-gray-100 w-full rounded border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {photo && (
        <img
          src={photo}
          alt="Preview"
          className="mt-4 w-full h-44 object-cover rounded"
        />
      )}
      {error && <p className="text-red-500 text-sm">Please upload a photo.</p>}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-4"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};
