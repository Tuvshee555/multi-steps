import React from "react";

const Continue = ({ inputFields, inputValues, setInputValues, errors }) => (
  <div className="flex gap-3 flex-col w-full mb-20">
    {inputFields.map(({ id, label, placeholder }) => (
      <div key={id} className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-semibold text-gray-800">
          {label}
        </label>
        <input
          id={id}
          type={id.includes("Password") ? "password" : "text"}
          className="placeholder-gray-400 border border-gray-400 rounded-lg p-3 text-base hover:border-blue-500"
          placeholder={placeholder}
          value={inputValues[id]}
          onChange={(e) =>
            setInputValues((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
            }))
          }
        />
        {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
      </div>
    ))}
  </div>
);

export default Continue;
