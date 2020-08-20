import React from "react";
import FooterComponent from "./FooterComponent";
import Button from "./LoremIpsumButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 py-40 text-center">
      <div className="flex justify-center max-w-screen-lg m-auto text-left">
        <FooterComponent bgColor="bg-white" />
        <FooterComponent bgColor="bg-teal-1000" />
      </div>
      <h3 className="my-10">Lorem ipsum now?</h3>
      <Button />
    </footer>
  );
};

export default Footer;
