import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="green-pink-gradient text-center py-4 px-6 rounded-2xl border-white-100 mt-6">
      {children}
    </button>
  );
};

export default Button;
