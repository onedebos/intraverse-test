import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  isBtnDisabled: boolean;
}

const Menu: React.FC<MenuProps> = ({ isBtnDisabled }) => {
  return (
    <header className="py-6">
      <nav className="flex justify-between mx-10">
        <Link to="/">Logo</Link>
        {!isBtnDisabled ? (
          <Link
            to="/register"
            className="bg-blue-1000 rounded-full px-4 py-2 text-white"
          >
            Lorem ipsum
          </Link>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default Menu;
