import React from "react";

interface NowProps {
  content: string;
  icon: string;
  title: string;
}

const LoremIpsumNowComponent: React.FC<NowProps> = ({
  title,
  content,
  icon,
}) => {
  return (
    <div className="col-span-1 flex justify-center items-center m-auto flex-col hover:shadow-lg p-8 rounded-lg transition ease-in-out duration-300 hover:text-blue-1000">
      <img src={icon} className="py-4" alt="icon" />
      <h3 className="font-semibold py-6 text-black">{title}</h3>
      <p className="text-black">{content}</p>
    </div>
  );
};

export default LoremIpsumNowComponent;
