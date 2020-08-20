import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  bgColor: string;
}

const FooterComponent: React.FC<FooterProps> = ({ bgColor }) => {
  return (
    <div className={`${bgColor} shadow-lg py-20 px-10 rounded-md`}>
      <h1 className="text-2xl font-bold mb-6">Lorem Ipsum now</h1>
      <p className="mb-20">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et !
      </p>
      <Link to="/login" className="text-blue-1000">
        Lorem ipsum now
      </Link>
    </div>
  );
};

export default FooterComponent;
