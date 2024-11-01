import React, { useState } from "react";

const Input = ({ placeholder = "Password", ...props }) => {
  const [showPass, set_showPass] = useState(false);

  return (
    <div className="relative group">
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        required={true}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-1 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />

      <div
        onClick={() => set_showPass((p) => !p)}
        className="absolute cursor-pointer flex items-center inset-y-0 right-0 pr-5 text-gray-400 hover:text-primary-600"
      >
        {showPass ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-8a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-8a2 2 0 100-4 2 2 0 000 4zm-1 6a1 1 0 112 0v1a1 1 0 11-2 0v-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Input;
