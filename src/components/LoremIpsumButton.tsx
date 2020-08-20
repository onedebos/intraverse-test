import React from "react";
import { Link } from "react-router-dom";

const LoremIpsumButton = () => {
  return (
    <Link
      to="/register"
      className="bg-blue-1000 rounded-full px-16 py-3 text-white font-semibold shadow-lg text-center"
    >
      Lorem ipsum now
    </Link>
  );
};

export default LoremIpsumButton;
